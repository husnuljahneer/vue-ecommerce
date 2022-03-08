import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import Cart from "@/views/Cart.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import Checkout from "@/views/Checkout.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/ProductDetails/:id",
        name: "ProductDetails",
        component: ProductDetails,
        props: true,
    },
    {
        path: "/Cart",
        name: "Cart",
        component: Cart,
    },
    {
        path: "/Login",
        name: "Login",
        component: Login,
    },
    {
        path: "/Register",
        name: "Register",
        component: Register,
    },
    {
        path: "/Checkout",
        name: "Checkout",
        component: Checkout,
        props: true,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: PageNotFound },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;