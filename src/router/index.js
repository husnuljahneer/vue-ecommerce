import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import Cart from "@/views/Cart.vue";
import ProductDetails from "@/components/ProductDetails.vue";

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
    { path: "/:pathMatch(.*)*", name: "NotFound", component: PageNotFound },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;