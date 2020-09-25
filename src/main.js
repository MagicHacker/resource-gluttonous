import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Layout, Menu, Icon, FormModel, Input } from 'ant-design-vue'
;[Button, Layout, Menu, Icon, FormModel, Input].forEach(item => {
  Vue.use(item)
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
