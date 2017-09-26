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
Vue.directive('moveTo', {
  inserted (el, binding) {
    var moveTo = function (sel) {
      const tar = document.querySelector(sel)
      if (tar) {
        let doc = document
        const docTop = function (...arg) {
          if (arg.length === 0) {
            return doc.body.scrollTop + doc.documentElement.scrollTop
          } else if (arg.length === 1) {
            doc.body.scrollTop = arg[0]
            doc.documentElement.scrollTop = arg[0]
            return docTop()
          }
        }
        return function (e) {
          if (window.location.href === 'http://localhost:8080/#/') {
            e.preventDefault()
          }
          const tarTop = tar.offsetTop
          const clickTop = docTop()
          let status
          if (clickTop < tarTop) status = 'down'
          else status = 'up'
          const DURATION = 0.4
          const SPEED = Math.abs(tarTop - clickTop) / (DURATION / 1 * 60)
          let lastTop
          const scrollStep = function () {
            let scrollTop = docTop()
            lastTop = scrollTop
            if (status === 'down') {
              scrollTop += SPEED
              if (scrollTop > tarTop) {
                scrollTop = tarTop
                status = 'stop'
              }
            } else if (status === 'up') {
              scrollTop -= SPEED
              if (scrollTop < tarTop) {
                scrollTop = tarTop
                status = 'stop'
              }
            }
            const thisTop = docTop(scrollTop)
            if (thisTop === lastTop) {
              status = 'stop'
            }
            if (status === 'stop') {
              return
            }
            requestAnimationFrame(scrollStep)
          }
          scrollStep()
        }
      } else {
        return undefined
      }
    }
    el.addEventListener('click', moveTo(binding.value))
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
