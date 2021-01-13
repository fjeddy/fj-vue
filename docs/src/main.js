import Vue from 'vue'
import { FCode, FTabs } from 'framework'

import App from './App.vue'
import router from '@/router'

Vue.config.productionTip = false

Vue.component('f-code', FCode)
Vue.component('f-tabs', FTabs)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
