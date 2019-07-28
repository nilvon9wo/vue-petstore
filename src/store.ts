import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: {},
  },
  mutations: {
    SET_STORE(state, products) {
      state.products = products;
    },
  },
  actions: {
    initStore: (
        ({commit}): any =>
          axios.get('./data/products.json')
              .then((response) =>  {
                commit('SET_STORE', response.data.products);
              })
    ),
  },
  getters: {
    products: (state) => state.products,
  },
});
