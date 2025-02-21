<template>
  <div class="flex flex-col items-center p-8 space-y-8">
    <h1 class="text-3xl font-bold text-center text-gray-800">Ваші квитки</h1>

    <div v-if="userEmail" class="text-lg font-semibold text-gray-700">
      Ви увійшли як: {{ userEmail }}
    </div>

    <button @click="logout" class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">
      Вийти
    </button>

    <div v-if="loading" class="text-gray-500 text-center italic">Завантаження квитків...</div>

    <ul v-else-if="tickets.length" ref="ticketList" class="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg space-y-4">
      <li v-for="ticket in tickets" :key="ticket.id" class="bg-gray-100 p-4 rounded shadow flex justify-between">
        <RouterLink :to="'/ticket-view/' + ticket.ticket_id">
          {{ getStationName(ticket.from_station_id) }} → {{ getStationName(ticket.to_station_id) }} на {{ ticket.date }}
        </RouterLink>
        <button @click="deleteTicket(ticket.id)" class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">
          Видалити
        </button>
      </li>
    </ul>

    <p v-else class="text-gray-500 text-center italic">У вас немає придбаних квитків.</p>

    <button v-if="tickets.length" @click="downloadPDF" class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
      Завантажити PDF
    </button>
  </div>
</template>

<script>
import { supabase } from '@/lib/supabaseClient';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas-pro';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      tickets: [],
      stations: [],
      userEmail: null,
      userId: null,
      loading: true,
    };
  },
  async mounted() {
    await this.fetchUser();
    await this.fetchStations();
    await this.fetchTickets();
    this.loading = false;
  },
  methods: {
    async fetchUser() {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) {
        console.error('Помилка отримання користувача:', error.message);
        return;
      }
      if (user) {
        this.userEmail = user.email;
        this.userId = user.id;
      }
    },

    async fetchTickets() {
      if (!this.userId) {
        console.warn('Користувач не знайдений, квитки не будуть завантажені.');
        return;
      }

      const { data, error } = await supabase
        .from('purchased_tickets')
        .select('id, ticket_id, purchase_date, tickets(date, route_id, price, routes(from_station_id, to_station_id))')
        .eq('user_id', this.userId);

      if (error) {
        console.error('Помилка отримання квитків:', error.message);
      } else {
        this.tickets = data.map(pt => ({
          id: pt.id,
          ticket_id: pt.ticket_id,
          date: pt.tickets.date,
          price: pt.tickets.price,
          from_station_id: pt.tickets.routes.from_station_id,
          to_station_id: pt.tickets.routes.to_station_id,
        }));
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
      const station = this.stations.find(station => station.id === stationId);
      return station ? station.name : 'Невідома станція';
    },

    async logout() {
      await supabase.auth.signOut();
      window.location.href = '/login-page';
    },

    async deleteTicket(ticketId) {
      try {
        const { error } = await supabase
          .from('purchased_tickets')
          .delete()
          .eq('id', ticketId);

        if (error) {
          console.error('Помилка видалення квитка:', error.message);
        } else {
          // Видалити квиток із локального списку
          this.tickets = this.tickets.filter(ticket => ticket.id !== ticketId);
        }
      } catch (error) {
        console.error('Помилка при видаленні квитка:', error);
      }
    },

    async downloadPDF() {
      try {
        const element = this.$refs.ticketList;
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 190;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
        pdf.save('tickets.pdf');
      } catch (error) {
        console.error('Помилка створення PDF:', error);
      }
    },
  },
};
</script>
