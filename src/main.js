import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './api'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 全局注册axios
Vue.prototype.$http = axios
// 注册element-ui
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
