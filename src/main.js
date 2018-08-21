import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Form from './components/Form'
import Main from './components/Main'
Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Main },
  { path: '/new-film', component: Form },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
