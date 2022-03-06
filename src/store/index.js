import { createStore } from 'vuex'
import productModule from './modules/products'

export default createStore({
    modules: {
        products: productModule
    }
})