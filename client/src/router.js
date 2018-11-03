import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Donut from './components/Donut'
import Pie from './components/Pie'
import PassStats from './components/PassStats'
import Landing from './components/Landing'

export const routes = [
    {
      path: '/',
      component: Landing
    },
    {
        path: '/distance',
        component: PassStats
    },
    {
        path: '/frequency',
        component: Pie
    },
    {
        path: '/stations',
        component: Donut
    }
];

