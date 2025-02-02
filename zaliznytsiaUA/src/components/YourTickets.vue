<template>

  <div class="your-tickets">
    <h2>Your tickets</h2>
    <ul v-if="tickets.length">
      <li v-for="(ticket, index) in tickets" :key="index" class="ticket-item">
        {{ ticket.from }} → {{ ticket.to }} for {{ ticket.date }} — {{ ticket.quantity }} tickets
      </li>
    </ul>
    <p v-else class="empty-cart">Your cart is empty.</p>
  </div>

</template>

<script>

  import { store } from '../store';

  export default {
    computed: {
      tickets() {
        return store.tickets;
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
  }

</style>