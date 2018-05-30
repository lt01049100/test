import Vue from 'vue'
import Vuex from 'vuex'
import axios from './http'
import config from './config'
import store from './store/store'
import router from './router'
import App from './App'
import iview from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.prototype.$config = config;
// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.$http = axios;

// Vue.use(router)
// Vue.use(Vuex)
Vue.use(iview)

new Vue({
  el: '#app',
  axios,
  router,
  store,
  components: { App },
  template: '<App/>'
})
