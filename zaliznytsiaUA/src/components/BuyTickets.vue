<template>

  <div class="buy-tickets">
    <h2>Купівля квитків</h2>

    <form @submit.prevent="buyTicket">
      <div class="form-group">
        <label for="from">Станція відправлення:</label>
        <select v-model="ticket.from" id="from" required>
          <option disabled value="">Оберіть станцію</option>
          <option v-for="station in stations" :key="station.id" :value="station.id">
            {{ station.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="to">Станція прибуття:</label>
        <select v-model="ticket.to" id="to" required>
          <option disabled value="">Оберіть станцію</option>
          <option v-for="station in stations" :key="station.id" :value="station.id">
            {{ station.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="date">Дата відправлення:</label>
        <input type="date" v-model="ticket.date" id="date" required />
      </div>

      <div class="form-group">
        <label for="quantity">Кількість квитків:</label>
        <input type="number" v-model.number="ticket.quantity" id="quantity" min="1" max="10" required />
      </div>

      <button type="submit">Купити квиток</button>
    </form>

    <div v-if="confirmationMessage" class="confirmation">
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
          console.error('Помилка завантаження станцій:', error);
        } else {
          this.stations = data;
        }
      },
      async buyTicket() {
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
          },
        ]);

        if (error) {
          console.error('Помилка купівлі квитка:', error);
          alert('Не вдалося купити квиток.');
        } else {
          this.confirmationMessage = 'Білет успішно куплено!';
          this.ticket = { from: '', to: '', date: '', quantity: 1 };
        }
      },
    },
  };

</script>

<style scoped lang="scss">

  .buy-tickets {
    max-width: 400px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    h2 {
      text-align: center;
      color: #4c96af;
    }

    .form-group {
      margin-bottom: 1rem;

      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: bold;
      }

      input,
      select {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
    }

    button {
      width: 100%;
      padding: 0.75rem;
      background-color: #4c96af;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;

      &:hover {
        background-color: #3b7e94;
      }
    }

    .confirmation {
      margin-top: 1rem;
      padding: 0.75rem;
      background-color: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
      border-radius: 5px;
      text-align: center;
    }
  }

</style>