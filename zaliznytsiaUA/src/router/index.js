import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "../components/AboutUs.vue";
import BuyTickets from "../components/BuyTickets.vue";
import TechSupport from "../components/TechSupport.vue";
import MainPage from "@/components/MainPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainPage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutUs,
  },
  {
    path: "/ticket",
    name: "Ticket",
    component: BuyTickets,
  },
  {
    path: "/support",
    name: "Support",
    component: TechSupport,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;