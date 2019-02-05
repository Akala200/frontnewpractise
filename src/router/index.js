import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login'
import Register from '../components/registration'
import Dashboard from '../components/dashboard'






Vue.use(Router);



export default new Router({
    mode: 'history',
    routes: [{
      path: '/',
      component: Login,
      children: [{
        name: 'login',
        path: '/src/components/Login.vue',
      },
      {
        name: 'Register',
        component: Register,
        path: '/src/components/registration.vue',
      },
      {

          name: 'dashboard',
          path: '/src/components/dashboard.vue',
          component: Dashboard,
          default: true,
      },

      ],
    },
    ],
  })



