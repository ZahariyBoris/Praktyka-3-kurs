<template>

  <div class="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-semibold text-center text-blue-600 mb-4">Купівля квитків</h2>

    <form @submit.prevent="buyTicket" class="space-y-4">
      <div>
        <label for="from" class="block text-sm font-medium text-gray-700">Станція відправлення:</label>
        <select v-model="ticket.from" id="from" required class="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300">
          <option disabled value="">Оберіть станцію</option>
          <option v-for="station in stations" :key="station.id" :value="station.id">
            {{ station.name }}
          </option>
        </select>
      </div>

      <div>
        <label for="to" class="block text-sm font-medium text-gray-700">Станція прибуття:</label>
        <select v-model="ticket.to" id="to" required class="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300">
          <option disabled value="">Оберіть станцію</option>
          <option v-for="station in stations" :key="station.id" :value="station.id">
            {{ station.name }}
          </option>
        </select>
      </div>

      <div>
        <label for="date" class="block text-sm font-medium text-gray-700">Дата відправлення:</label>
        <input type="date" v-model="ticket.date" id="date" required class="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300" />
      </div>

      <div>
        <label for="quantity" class="block text-sm font-medium text-gray-700">Кількість квитків:</label>
        <input type="number" v-model.number="ticket.quantity" id="quantity" min="1" max="10" required class="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300" />
      </div>

      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Купити квиток</button>
    </form>

    <div v-if="confirmationMessage" class="mt-4 p-3 text-green-800 bg-green-100 border border-green-400 rounded-lg text-center">
      {{ confirmationMessage }}
    </div>
  </div>

</template>

<script>

  import { supabase } from '@/lib/supabaseClient';

  export default {
    data() {
      return {
        stations: [],
        ticket: {
          from: '',
          to: '',
          date: '',
          quantity: 1,
        },
        confirmationMessage: '',
      };
    },
    async mounted() {
      await this.fetchStations();
    },
    methods: {
      async fetchStations() {
        const { data, error } = await supabase.from('stations').select('*');

        if (error) {
          console.error('Помилка отримання станцій:', error.message);
        } else {
          this.stations = data;
        }
      },

      async buyTicket() {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          alert("Ви не залогінені!");
          return;
        }

        if (!this.ticket.from || !this.ticket.to || !this.ticket.date) {
          alert('Будь ласка, заповніть усі поля.');
          return;
        }

        const { error } = await supabase.from('tickets').insert([
          {
            from_station_id: this.ticket.from,
            to_station_id: this.ticket.to,
            date: this.ticket.date,
            quantity: this.ticket.quantity,
            user_id: user.id,
          },
        ]);

        if (error) {
          console.error('Помилка купівлі квитка:', error);
          alert('Не вдалося купити квиток.');
        } else {
          this.confirmationMessage = 'Квиток успішно куплено!';
          this.ticket = { from: '', to: '', date: '', quantity: 1 };
        }
      },
    },
  };

</script>