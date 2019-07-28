import axios from 'axios';

const state = {
    products: {},
};

const getters = {
    products: (getterState: any) => getterState.products,
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
};

export default {
    state,
    getters,
    actions,
    mutations,
};
