<template>

  <div class="your-tickets">
    <h2>Ваші квитки</h2>
    <ul v-if="tickets.length" ref="ticketList">
      <li v-for="ticket in tickets" :key="ticket.id" class="ticket-item">
        {{ ticket.from_station }} → {{ ticket.to_station }} на {{ ticket.date }} — {{ ticket.quantity }} квитків
      </li>
    </ul>
    <p v-else class="empty-cart">Ваш кошик порожній.</p>

    <button v-if="tickets.length" @click="downloadPDF" class="download-btn">Завантажити PDF</button>
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
      };
    },
    async mounted() {
      await this.fetchTickets();
    },
    methods: {
      async fetchTickets() {
        const { data, error } = await supabase
          .from('tickets')
          .select('id, date, quantity, from_station_id, to_station_id, stations_from:stations(name), stations_to:stations(name)')
          .eq('user_id', '1'); // Тут потрібно підставити реальний ID користувача

        if (error) {
          console.error('Помилка отримання квитків:', error);
        } else {
          this.tickets = data.map(ticket => ({
            id: ticket.id,
            date: ticket.date,
            quantity: ticket.quantity,
            from_station: ticket.stations_from.name,
            to_station: ticket.stations_to.name,
          }));
        }
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

<style scoped lang="scss">

  .your-tickets {
    max-width: 600px;
    margin: 2rem auto;
    padding: 1.5rem;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    h2 {
      text-align: center;
      color: #4c96af;
    }

    .empty-cart {
      text-align: center;
      color: #777;
      font-style: italic;
      padding: 1rem;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 5px;
    }

    .ticket-item {
      background-color: #fff;
      padding: 1rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      font-weight: bold;
      color: #333;
      transition: background-color 0.3s;

      &:hover {
        background-color: #e6f7fb;
      }
    }

    .download-btn {
      display: block;
      margin: 1rem auto;
      padding: 0.75rem 1.5rem;
      background-color: #4c96af;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s;

      &:hover {
        background-color: #3b7c90;
      }
    }
  }

</style>