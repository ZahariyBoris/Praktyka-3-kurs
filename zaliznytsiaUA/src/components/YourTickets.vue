<template>
  
  <div class="flex flex-col items-center p-8 space-y-8">
    <h1 class="text-3xl font-bold text-center text-gray-800">Ваші квитки</h1>

    <ul v-if="tickets.length" ref="ticketList" class="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg space-y-4">
      <li v-for="ticket in tickets" :key="ticket.id" class="bg-gray-100 p-4 rounded shadow">
        {{ getStationName(ticket.from_station_id) }} → {{ getStationName(ticket.to_station_id) }} на {{ ticket.date }} — {{ ticket.quantity }} шт.
      </li>
    </ul>
    
    <p v-else class="text-gray-500 text-center italic">Ваш кошик порожній.</p>

    <button v-if="tickets.length" @click="downloadPDF" class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Завантажити PDF</button>
  </div>

</template>

<script>

  import { supabase } from '@/lib/supabaseClient';
  import jsPDF from 'jspdf';
  import html2canvas from 'html2canvas';

  export default {
    data() {
      return {
        tickets: [],
        stations: [],
      };
    },
    async mounted() {
      await this.fetchTickets();
      await this.fetchStations();
    },
    methods: {
      async fetchTickets() {
        const { data, error } = await supabase.from('tickets').select('*');

        if (error) {
          console.error('Помилка отримання квитків:', error.message, error);
        } else {
          console.log('Отримані квитки:', data);
          this.tickets = data;
        }
      },

      async fetchStations() {
        const { data, error } = await supabase.from('stations').select('*');

        if (error) {
          console.error('Помилка отримання станцій:', error.message, error);
        } else {
          console.log('Отримані станції:', data);
          this.stations = data;
        }
      },

      getStationName(stationId) {
        const station = this.stations.find(station => station.id === stationId);
        return station ? station.name : 'Невідома станція';
      },

      async downloadPDF() {
        const element = this.$refs.ticketList;
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');

        const imgWidth = 190;
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let position = 10;

        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        pdf.save('tickets.pdf');
      },
    },
  };

</script>