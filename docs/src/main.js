import Vue from 'vue'
import Vuep from 'vuep'

import App from './App.vue'
import router from '@/router'

Vue.config.productionTip = false

Vue.use(Vuep)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
