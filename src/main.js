// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import a from '@/components/a/a'
import b from '@/components/b/b'
import c from '@/components/c/c'
Vue.use(VueRouter)
Vue.use(VueResource)
const routes = [
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

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
window.app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.push('/a')
