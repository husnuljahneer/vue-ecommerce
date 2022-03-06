import axios from 'axios';
import baseURL from '../../Services/Base';

const state = () => ({
    testCount: 180,
})

const getters = {
    getTestCount: state => state.testCount,
}

const mutations = {
    SET_TEST_COUNT(state, payload) {
        state.testCount = payload;
    }
}

const actions = {
    async getTestCount({ commit }) {
        try {
            const response = await axios.get(baseURL + 'test');
            commit('SET_TEST_COUNT', response.data.count);
        } catch (error) {
            console.log(error);
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}