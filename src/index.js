import Vue from 'vue'
import App from '@/App.vue'
import router from '@/routes'
import stores from '@/stores'

import jQuery from 'jquery'
let Bootstrap = require('bootstrap')

global.jQuery = jQuery
global.$ = jQuery

Vue.config.productionTip = false;

const render = h => h(App)

new Vue({
  render,
  router,
  stores
}).$mount('#app')