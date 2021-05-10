import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import VueRouter from 'vue-router'
import App from './App.vue'
import{ routes } from './routes'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)
const router = new VueRouter({
  routes:routes
})


new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
