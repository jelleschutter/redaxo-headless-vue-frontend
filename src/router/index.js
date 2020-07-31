import { createRouter, createWebHistory } from "vue-router";
import Page from "../views/Page.vue";

const routes = [
  {
    path: "/:page*",
    name: "Page",
    component: Page
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
