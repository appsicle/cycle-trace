import Vue from 'vue'
import App from './App.vue'
import resource from 'vue-resource';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'; //needed for vuetify
import 'es6-promise/auto' //enable promise for certain browsers
import '@babel/polyfill'
import store from '../store';

Vue.use(resource);
Vue.use(Vuex);
Vue.use(Vuetify);

Vue.http.options.root = '/root';

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount('#app');