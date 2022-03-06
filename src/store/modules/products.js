import axios from "axios";
import baseUrl from '../../Services/Base';

const state = () => ({
    products: [],
    product: [],
});

const getters = {
    products: (state) => state.products,
};

const actions = {
    getAllProducts({ commit }) {
        axios.get(baseUrl + "products")
            .then((response) => {
                commit("SET_PRODUCTS", response.data.products);
            });
    },
    getProductById({ commit }, id) {
        axios.get(baseUrl + `products/${id}`).then((response) => {
            commit("SET_PRODUCT", response.data.product);
        });
    },
    getUserProducts({ commit }, id) {
        axios.get(baseUrl + `products/userProduct/${id}`).then((response) => {
            commit("GET_USER_PRODUCTS", response.data.products);
        });
    }
};

const mutations = {
    SET_PRODUCTS(state, products) {
        state.products = products;
    },
    SET_PRODUCT(state, product) {
        state.product = product;
    },
};

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
};