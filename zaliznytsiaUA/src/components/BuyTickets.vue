<template>
  <div class="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-semibold text-center text-blue-600 mb-4">Пошук квитків</h2>

    <form @submit.prevent="searchTickets" class="space-y-4">
      <div>
        <label for="from" class="block text-sm font-medium text-gray-700">Станція відправлення:</label>
        <select v-model="searchParams.from" id="from" required class="w-full mt-1 p-2 border rounded-lg">
          <option disabled value="">Оберіть станцію</option>
          <option v-for="station in stations" :key="station.id" :value="station.id">{{ station.name }}</option>
        </select>
      </div>

      <div>
        <label for="to" class="block text-sm font-medium text-gray-700">Станція прибуття:</label>
        <select v-model="searchParams.to" id="to" required class="w-full mt-1 p-2 border rounded-lg">
          <option disabled value="">Оберіть станцію</option>
          <option v-for="station in stations" :key="station.id" :value="station.id">{{ station.name }}</option>
        </select>
      </div>

      <div>
        <label for="date" class="block text-sm font-medium text-gray-700">Дата відправлення:</label>
        <input type="date" v-model="searchParams.date" id="date" :min="minDate" required class="w-full mt-1 p-2 border rounded-lg" />
      </div>

      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Знайти квитки</button>
    </form>

    <div v-if="tickets.length" class="mt-6 p-4 bg-gray-100 rounded-lg">
      <h3 class="text-lg font-semibold text-gray-800 mb-2">Доступні квитки:</h3>
      <ul>
        <li v-for="ticket in tickets" :key="ticket.id" class="p-2 border-b flex justify-between items-center">
          <div>
            <span class="font-medium">Рейс:</span> {{ ticket.id }} | 
            <span class="font-medium">Час:</span> {{ ticket.departure_time }} - {{ ticket.arrival_time }} | 
            <span class="font-medium">Ціна:</span> {{ ticket.price }} грн
          </div>
          <button @click="purchaseTicket(ticket.id)" class="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition">Купити</button>
        </li>
      </ul>
    </div>
    <p v-else-if="searched" class="mt-4 text-center text-gray-500">Квитки не знайдено.</p>
  </div>
</template>

<script>
import { supabase } from "@/lib/supabaseClient";

export default {
  data() {
    return {
      stations: [],
      tickets: [],
      searched: false,
      searchParams: {
        from: "",
        to: "",
        date: "",
      },
      userId: null,
    };
  },
  computed: {
    minDate() {
      return new Date().toISOString().split("T")[0];
    },
  },
  async mounted() {
    await this.fetchStations();
    await this.fetchUser();
  },
  methods: {
    async fetchUser() {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Помилка отримання користувача:", error.message);
      } else if (data.user) {
        this.userId = data.user.id;
      }
    },
    async fetchStations() {
      const { data, error } = await supabase.from("stations").select("*");
      if (error) console.error("Помилка отримання станцій:", error.message);
      else this.stations = data;
    },
    async searchTickets() {
      this.searched = true;
      this.tickets = [];
      
      const { data: tickets, error: ticketError } = await supabase
        .from("tickets")
        .select("*")
        .eq("date", this.searchParams.date);
      
      if (ticketError) {
        console.error("Помилка пошуку квитків:", ticketError.message);
        return;
      }
      
      const filteredTickets = [];
      for (const ticket of tickets) {
        const { data: route, error: routeError } = await supabase
          .from("routes")
          .select("*")
          .eq("id", ticket.route_id)
          .single();

        if (routeError) {
          console.error("Помилка отримання маршруту:", routeError.message);
          continue;
        }

        if (route.from_station_id === this.searchParams.from && route.to_station_id === this.searchParams.to) {
          filteredTickets.push({ ...ticket, ...route });
        }
      }
      
      this.tickets = filteredTickets;
    },
    async purchaseTicket(ticketId) {
      if (!this.userId) {
        alert("Будь ласка, увійдіть в систему для покупки квитка.");
        return;
      }

      const { data: ticket, error: ticketError } = await supabase
        .from("tickets")
        .select("*")
        .eq("id", ticketId)
        .single();
      
      if (ticketError || !ticket) {
        console.error("Помилка отримання квитка:", ticketError?.message);
        return;
      }

      if (ticket.available_seats <= 0) {
        alert("Немає вільних місць на цей рейс.");
        return;
      }

      const { error } = await supabase
        .from("purchased_tickets")
        .insert([{ ticket_id: ticketId, user_id: this.userId }]);

      if (error) {
        console.error("Помилка купівлі квитка:", error.message);
      } else {
        alert("Квиток успішно придбано!");
        await supabase
          .from("tickets")
          .update({ available_seats: ticket.available_seats - 1 })
          .eq("id", ticketId);
      }
    },
  },
};
</script>
