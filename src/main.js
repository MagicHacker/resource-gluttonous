import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Button,
  Layout,
  Menu,
  Icon,
  FormModel,
  Input,
  message,
  Table,
  Modal
} from 'ant-design-vue'
;[Button, Layout, Menu, Icon, FormModel, Input, message, Table, Modal].forEach(
  item => {
    Vue.use(item)
  }
)
Vue.prototype.$message = message
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
