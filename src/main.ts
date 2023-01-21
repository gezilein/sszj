import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import Alphabet from "./views/Alphabet.vue";
import Workbook from "./views/Workbook.vue";
import { createPinia } from "pinia";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/abeceda", component: Alphabet },
    { path: "/:course/:lesson?", component: Workbook },
  ],
});

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(PrimeVue);
app.mount("#app");
