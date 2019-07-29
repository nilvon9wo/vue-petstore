import App from './App.vue';
import firebase from 'firebase';
import router from './router';
import store from './store/store';
import Vue from 'vue';
import VueFire from 'vuefire';

import './assets/app.css';
import './firebase';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App},
    render: (h) => h(App),
}).$mount('#app');
