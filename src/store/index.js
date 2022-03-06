import { createStore } from 'vuex'
import productModule from './modules/products'
import cartModule from './modules/cart'
export default createStore({
    modules: {
        products: productModule,
        cart: cartModule,
    }
})