const store = new Vuex.Store({
    state: {
        count: 0,
        message: 'Hello World'
    },
    mutations: {
        increment(state, payload) {
            state.count += payload;

        }
    },
    getters: {
        count(state) {
            return state.count * 10;
        },
        message(state) {
            return state.message.toUpperCase();
        }
    },
    actions: {
        increment(context, payload) {
            setTimeout(
                function () {
                    context.commit('increment', payload);
                },
                2000
            );
        }
    }
});

new Vue({
    el: '#app',
    data() {
        return {
            header: 'Vuex App'
        };
    },
    computed: {
        counter() {
            return store.getters.count;
        },
        welcome() {
            return store.getters.message;
        }
    },
    methods: {
        increment() {
            store.dispatch('increment', 10);
        },
    }
});