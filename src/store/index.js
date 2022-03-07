import { createStore } from 'vuex'
import productModule from './modules/products'
import cartModule from './modules/cart'
import authModule from './modules/auth'
import VuexPersist from "vuex-persist";

const vuexPersist = new VuexPersist({
    key: "ecom-stores",
    storage: window.localStorage,
});

export default createStore({
    modules: {
        namespaced: true,
        products: productModule,
        cart: cartModule,
        auth: authModule,
    },
    plugins: [vuexPersist.plugin],
})