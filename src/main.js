// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import a from '@/components/a/a'
import b from '@/components/b/b'
import c from '@/components/c/c'
Vue.use(VueRouter)
let routes = [
  {
    path: '/a',
    component: a
  },
  {
    path: '/b',
    component: b
  },
  {
    path: '/c',
    component: c
  },
  {
    path: '/',
    component: a
  }
]

let router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

window.app.$router.push('/a')
