import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Distance from './components/pages/Distance'
import Frequency from './components/pages/Frequency'
import Station from './components/pages/Stations'
import Landing from './components/pages/Landing'
import Seasons from './components/pages/Seasons'
import Routes from './components/pages/Routes'

export const routes = [
    {
      path: '/',
      component: Landing
    },
    {
        path: '/distance',
        component: Distance
    },
    {
        path: '/frequency',
        component: Frequency
    },
    {
        path: '/stations',
        component: Station
    },
    {
        path: '/seasons',
        component: Seasons
    },
    {
        path: '/routes',
        component: Routes
    }
];

