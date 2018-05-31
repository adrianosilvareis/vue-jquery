import Vue from 'vue';
import Router from 'vue-router'

import Home from '@/views/Home'
import About from '@/views/About'
import Categories from '@/views/Categories'
import Posts from '@/views/Posts'

Vue.use(Router)

const routes = [
  { path: '/', component: Home },
  { path: '/categories', component: Categories },
  { path: '/posts', component: Posts },
  { path: '/about', component: About },
]

export default new Router({
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})