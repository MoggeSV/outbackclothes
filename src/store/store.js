import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        message: "Test"
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        message(state) {
            return state.message;
        }
    }
})