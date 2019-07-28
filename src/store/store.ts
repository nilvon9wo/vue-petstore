import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import products from '@/store/modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
  },
});
