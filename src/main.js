import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import di from './plugins/di'
import UserService from './services/userService'

import NotFound from './components/NotFound'
import Home from './components/Home'
import News from './components/News'
//import Login from './components/Login'
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '*', component: NotFound },
    { path: '/', name : "Home", component: Home},
    { path: '/news', name : "News", component: News}
  ]
})


// Dependency Injection
di.factory('users', () => new UserService())

Object.defineProperty(Vue.prototype, '$di', {
  get(){
    return di;
  }
});


//Create the Vue instance
new Vue({
  vuetify,router,
  render: h => h(App)
}).$mount('#app')
