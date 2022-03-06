import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import PageNotFound from "@/views/PageNotFound.vue";
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
    { path: "/:pathMatch(.*)*", name: "NotFound", component: PageNotFound },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;