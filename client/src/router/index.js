import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Calendar from "../views/Calendar.vue";
import Home from "../views/Home.vue";
import Organizations from "../views/Organizations.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/calendar",
    name: "calendar",
    component: Calendar
  },
  {
    path: "/organizations/:budgetStage",
    name: "organizations",
    component: Organizations
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
