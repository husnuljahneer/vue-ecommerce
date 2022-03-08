import { useToast, POSITION } from 'vue-toastification'

const toast = useToast()

const state = () => ({
    accessToken: [],
    userEmail: '',
    userId: '',
    isLoggedIn: null,
});

const getters = {
    isLoggedIn: state => !state.accessToken
};

const actions = {
    setUser({ commit }, accessToken) {
        commit("SET_ACCESS_TOKEN", accessToken);
    },
    setUserEmail({ commit }, email) {
        commit("SET_USER_EMAIL", email);
    },
    setUserId({ commit }, id) {
        commit("SET_USER_ID", id);
    },
    logout({ commit }) {
        commit("LOGOUT");
    }
};

const mutations = {
    SET_ACCESS_TOKEN(state, accessToken) {
        state.accessToken = accessToken;
        state.isLoggedIn = true;
    },
    SET_USER_EMAIL(state, email) {
        state.userEmail = email;
    },
    SET_USER_ID(state, id) {
        state.userId = id;
    },
    LOGOUT(state) {
        state.accessToken = null;
        state.isLoggedIn = false;
        state.userEmail = '';
        state.userId = '';
        toast.error('Logged out', { position: POSITION.BOTTOM_RIGHT });
    }
};

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
};