import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { createRouter, createWebHashHistory } from "vue-router";
import Home from './views/Home.vue';
import Alphabet from './views/Alphabet.vue';
import Workbook from "./views/Workbook.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/abeceda', component: Alphabet },
        { path: '/ucbenik', component: Workbook },
    ],
})

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.mount('#app');
