// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(elementUi)
Vue.directive('title', {
  bind (el, binding) {
    document.title = binding.value
  }
})
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    eventHub: new Vue()
  },
  template: '<App/>',
  components: { App }
})
