import Vue from 'vue'
import { FCode } from 'framework'

import App from './App.vue'
import router from '@/router'

Vue.config.productionTip = false

Vue.component('f-code', FCode)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
