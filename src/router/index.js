import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ProductDetails from "@/components/ProductDetails.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
}, {
    path: "/ProductDetails",
    name: "ProductDetails",
    component: ProductDetails,
}];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});


export default router;