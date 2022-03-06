import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast from "vue-toastification";
import VueSmoothScroll from 'vue3-smooth-scroll'
import store from './store'
import '@/assets/style.css'
import "vue-toastification/dist/index.css";

createApp(App).use(router).use(store).use(VueSmoothScroll).use(Toast).mount('#app')