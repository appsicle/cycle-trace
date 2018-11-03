import Vue from 'vue'
import App from './App.vue'
import resource from 'vue-resource';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'; //needed for vuetify
import 'es6-promise/auto' //enable promise for certain browsers
import '@babel/polyfill'
import Router from 'vue-router';
import store from '../store';
import {routes} from '../src/router';

Vue.use(resource);
Vue.use(Vuex);
Vue.use(Vuetify);

Vue.http.options.root = '/root';

Vue.config.productionTip = false

const router = new Router({
    mode: 'history',
    routes
});

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');