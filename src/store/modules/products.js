import axios from 'axios';
import baseUrl from '../../Services/Base';

const state = () => ({
    products: [],
    product: [],
})

const getters = {
    products: (state) => state.products,
}

const actions = {
    getAllProducts({ commit }) {
        axios.get(baseUrl + "products").then((response) => {
            commit("SET_PRODUCTS", response.data.products);
        });
    },
}
const mutations = {
    SET_PRODUCTS(state, products) {
        state.products = products;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}