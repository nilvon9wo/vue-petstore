import axios from 'axios';

const state = {
    products: {},
    session: false,
};

const getters = {
    products: (getterState: any) => getterState.products,
    session: (getterState: any) => getterState.session,
};

// @ts-ignore
const actions = {
    initStore: (
        ({commit}: any): any =>
            axios.get('./data/products.json')
                .then((response) => {
                    commit('SET_STORE', response.data.products);
                })
    ),
};

const mutations = {
    SET_STORE(mutationState: any, products: any) {
        mutationState.products = products;
    },
    SET_SESSION(mutationState: any, session: any) {
        mutationState.session = session;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
