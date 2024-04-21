import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0,
        };
    },
    mutations: {
        increment(state, payload) {
            state.counter += payload.value;
        },
        decrement(state, payload) {
            state.counter -= payload.value;
        }
    },
    getters: {
        counter(state) {
            return state.counter;
        },
        counterDouble(state) {
            return state.counter * 2;
        },
        counterNormalized(_, getters) {
            if (getters.counterDouble < 0) return 0;
            if (getters.counterDouble > 30) return 30;
            return getters.counterDouble;
        },
    },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
