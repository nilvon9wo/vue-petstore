import Vue from 'vue';
import Router from 'vue-router';
import Form from '@/components/Form.vue';
import Main from '@/components/Main.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'iMain',
            component: Main,
            props: true,
        },
        {
            path: '/form',
            name: 'Form',
            component: Form,
            props: true,
        },
    ],
});
