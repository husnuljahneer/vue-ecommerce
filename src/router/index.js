import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import Cart from "@/views/Cart.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import Checkout from "@/views/Checkout.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Profile from "@/views/Profile.vue";
import Invoice from "@/views/Invoice.vue";
import store from "@/store";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/profile",
        name: "profile",
        component: Profile,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/Invoice/order_id=:order_id",
        name: "Invoice",
        component: Invoice,
        props: true,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/ProductDetails/:id",
        name: "ProductDetails",
        component: ProductDetails,
        props: true,
    },
    {
        path: "/Checkout",
        name: "Checkout",
        component: Checkout,
        props: true,
        meta: {
            requiresAuth: true,
        },
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: PageNotFound },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (store.state.auth.isLoggedIn) {
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }
});

export default router;