import { reactive } from 'vue';

export const store = reactive({
  tickets: [],

  addTicket(ticket) {
    this.tickets.push(ticket);
  },
});