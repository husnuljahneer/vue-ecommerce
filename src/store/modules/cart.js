import { useToast, POSITION } from 'vue-toastification'

const toast = useToast()

const state = () => ({
    cart: [],
    checkoutItems: [],
});

const getters = {
    cart: (state) => state.cart,
    cartItemCount(state) {
        return state.cart.length;
    },
    cartTotalPrice(state) {
        let total = 0;
        state.cart.forEach((item) => {
            total += item.price * item.qty;
        });
        return total;
    },
};

const actions = {
    checkout({ commit }, { userId, userEmail, cart, cartItemCount, cartTotalPrice }) {
        commit('CHECKOUT', { userId, userEmail, cart, cartItemCount, cartTotalPrice });
    },
    addProductToCart({ commit }, product) {
        commit("ADD_PRODUCT_TO_CART", product);
    },
    removeProductFromCart({ commit }, product) {
        commit("REMOVE_FROM_CART", product);
    },
    clearCart({ commit }) {
        commit("CLEAR_CART");
    },
    increaseQty({ commit }, product) {
        commit("INCREASE_QTY", product);
    },
    decreaseQty({ commit }, product) {
        commit("DECREASE_QTY", product);
    },
};

const mutations = {

    ADD_PRODUCT_TO_CART(state, product) {
        const cartItem = state.cart.find(item => item.id === product.id);
        if (cartItem) {
            return toast.error("Product already in cart", { position: POSITION.BOTTOM_RIGHT });
        } else {
            toast.success("Product added to cart", { position: POSITION.BOTTOM_RIGHT });
            return state.cart.push(product);
        }
    },

    REMOVE_FROM_CART(state, product) {
        state.cart = state.cart.filter(item => {
            return item.id !== product.id
        })
        toast.success("Product Removed from cart", { position: POSITION.BOTTOM_RIGHT });
    },
    INCREASE_QTY(state, product) {

        const cartItem = state.cart.find(item => item.id === product.id);
        cartItem.qty++;
        if (cartItem.qty == 0 || cartItem.qty < 1) {
            state.cart = state.cart.filter(item => {
                return item.id !== product.id
            })
        }
    },
    DECREASE_QTY(state, product) {
        const cartItem = state.cart.find(item => item.id === product.id);
        cartItem.qty--;
        if (cartItem.qty == 0 || cartItem.qty < 1) {
            state.cart = state.cart.filter(item => {
                return item.id !== product.id
            })
            toast.success("Product Removed from cart", { position: POSITION.BOTTOM_RIGHT });
        }
    },
    CLEAR_CART(state) {
        state.cart = [];
    }
};

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
};