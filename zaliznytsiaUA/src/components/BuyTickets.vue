<template>
  
  <div class="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-semibold text-center text-blue-600 mb-4">Доступні квитки</h2>

    <form @submit.prevent="searchTickets" class="mb-4">
      <div class="flex space-x-2">
        <select v-model="search.from" required class="w-full p-2 border rounded-lg">
          <option disabled value="">Станція відправлення</option>
          <option v-for="station in stations" :key="station.id" :value="station.id">
            {{ station.name }}
          </option>
        </select>
        <select v-model="search.to" required class="w-full p-2 border rounded-lg">
          <option disabled value="">Станція прибуття</option>
          <option v-for="station in stations" :key="station.id" :value="station.id">
            {{ station.name }}
          </option>
        </select>
        <input type="date" v-model="search.date" :min="minDate" required class="p-2 border rounded-lg">
        <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Шукати</button>
      </div>
    </form>

    <div v-if="loading" class="text-center">Завантаження...</div>
    <div v-else-if="tickets.length === 0" class="text-center text-gray-600">Квитки не знайдено</div>
    <div v-else>
      <div v-for="ticket in tickets" :key="ticket.id" class="border p-4 rounded-lg mb-2">
        <p><strong>Маршрут:</strong> {{ ticket.route.from_station.name }} → {{ ticket.route.to_station.name }}</p>
        <p><strong>Дата:</strong> {{ ticket.date }}</p>
        <p><strong>Ціна:</strong> {{ ticket.price }} грн</p>
        <p><strong>Доступні місця:</strong> {{ ticket.available_seats }}</p>
        <p><strong>Місце:</strong> {{ ticket.seat_num }}</p>
        <p><strong>VIP:</strong> {{ ticket.is_vip ? 'Так' : 'Ні' }}</p>
        <p><strong>Дозволені тварини:</strong> {{ ticket.pets_allowed ? 'Так' : 'Ні' }}</p>
        <button @click="buyTicket(ticket)" class="mt-2 bg-blue-600 text-white py-1 px-4 rounded-lg hover:bg-blue-700">Купити</button>
      </div>
    </div>
  </div>

</template>

<script>

  import { supabase } from "@/lib/supabaseClient";

  export default {
    data() {
      return {
        stations: [],
        search: {
          from: "",
          to: "",
          date: "",
        },
        tickets: [],
        loading: false,
      };
    },
    computed: {
      minDate() {
        return new Date().toISOString().split("T")[0];
      },
    },
    async mounted() {
      await this.fetchStations();
    },
    methods: {
      async fetchStations() {
        const { data, error } = await supabase.from("stations").select("*");
        if (!error) this.stations = data;
      },
      async searchTickets() {
        if (!this.search.from || !this.search.to || !this.search.date) {
          alert("Будь ласка, заповніть усі поля.");
          return;
        }
        this.loading = true;
        const { data, error } = await supabase
          .from("tickets")
          .select("*, route:routes(*, from_station:stations!from_station_id(*), to_station:stations!to_station_id(*))")
          .eq("route.from_station_id", this.search.from)
          .eq("route.to_station_id", this.search.to)
          .eq("date", this.search.date);
        
        if (error) {
          console.error("Помилка отримання квитків:", error.message);
          this.tickets = [];
        } else {
          this.tickets = data;
        }
        this.loading = false;
      },
      async buyTicket(ticket) {
        const { data: userData } = await supabase.auth.getUser();
        if (!userData?.user) {
          alert("Ви не залогінені!");
          return;
        }
        
        const { error } = await supabase.from("purchased_tickets").insert([
          {
            ticket_id: ticket.id,
            user_id: userData.user.id,
          },
        ]);
        if (!error) alert("Квиток успішно куплено!");
      },
    },
  };

</script>