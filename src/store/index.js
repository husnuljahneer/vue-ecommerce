import { createStore } from 'vuex'
import productModule from './modules/products'
import cartModule from './modules/cart'

import VuexPersist from "vuex-persist";

const vuexPersist = new VuexPersist({
    key: "ecom-stores",
    storage: window.localStorage,
});

export default createStore({
    modules: {
        products: productModule,
        cart: cartModule,
    },
    plugins: [vuexPersist.plugin],
})