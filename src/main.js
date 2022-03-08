import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from "vue-toastification";
import VueSmoothScroll from 'vue3-smooth-scroll'

import '@/assets/style.css'
import "vue-toastification/dist/index.css";

createApp(App).use(store).use(router).use(VueSmoothScroll).use(Toast).mount('#app')