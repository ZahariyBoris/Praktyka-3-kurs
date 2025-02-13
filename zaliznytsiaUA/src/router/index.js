import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "../components/AboutUs.vue";
import BuyTickets from "../components/BuyTickets.vue";
import TechSupport from "../components/TechSupport.vue";
import MainPage from "@/components/MainPage.vue";
import YourTickets from "../components/YourTickets.vue";
import LoginPage from "../components/LoginPage.vue";
import RegisterPage from "../components/RegisterPage.vue";
import TicketView from "../components/TicketView.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/about",
    component: AboutUs,
  },
  {
    path: "/ticket",
    component: BuyTickets,
  },
  {
    path: "/support",
    component: TechSupport,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/ticket-view/:id",
    component: TicketView,
  },
  {
    path: "/login-page",
    component: LoginPage,
  },
  {
    path: "/your-tickets",
    component: YourTickets,
    props: { tickets: [] },
  },  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;