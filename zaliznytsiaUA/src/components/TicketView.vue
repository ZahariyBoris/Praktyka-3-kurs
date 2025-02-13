<template>

  <div class="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-semibold text-center text-blue-600 mb-4">Деталі квитка</h2>
    
    <div v-if="ticket">
      <p class="text-lg"><strong>Відправлення:</strong> {{ getStationName(ticket.from_station_id) }}</p>
      <p class="text-lg"><strong>Прибуття:</strong> {{ getStationName(ticket.to_station_id) }}</p>
      <p class="text-lg"><strong>Дата:</strong> {{ ticket.date }}</p>
      <p class="text-lg"><strong>Кількість:</strong> {{ ticket.quantity }} шт.</p>
    </div>
    
    <p v-else class="text-center text-gray-500">Квиток не знайдено.</p>
    
    <button @click="$router.push('/your-tickets')" class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
      Назад
    </button>
  </div>

</template>

<script>

import { supabase } from '@/lib/supabaseClient';

  export default {
    data() {
      return {
        ticket: null,
        stations: [],
      };
    },
    async mounted() {
      const ticketId = this.$route.params.id;
      await this.fetchStations();
      await this.fetchTicket(ticketId);
    },
    methods: {
      async fetchTicket(ticketId) {
        const { data, error } = await supabase.from('tickets').select('*').eq('id', ticketId).single();
        if (error) {
          console.error('Помилка отримання квитка:', error.message);
        } else {
          this.ticket = data;
        }
      },
      async fetchStations() {
        const { data, error } = await supabase.from('stations').select('*');
        if (error) {
          console.error('Помилка отримання станцій:', error.message);
        } else {
          this.stations = data;
        }
      },
      getStationName(stationId) {
        const station = this.stations.find(s => s.id === stationId);
        return station ? station.name : 'Невідома станція';
      },
    },
  };

</script>