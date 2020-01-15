// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.prototype.$axios1 = axios
axios.defaults.baseURL='https://musicapi.citrons.cn/'

Vue.prototype.$axios2 = axios
axios.defaults.baseURL='http://api.pingcc.cn/'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
