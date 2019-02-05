import Vue from 'vue';
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'


Vue.use(router)

Vue.use(iView);

// The routing configuration


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
