// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import axios from "axios"
Vue.prototype.$http = axios
import vant from "vant"
Vue.use(vant)
import "vant/lib/index.css"
import Less from 'less'
Vue.use(Less)

Vue.config.productionTip = false
//图片懒加载
import { Lazyload } from 'vant';
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: 'static/imgs/error.jpg',
  loading: 'static/imgs/loading.gif',
  attempt: 3
})
import moment from "moment"
Vue.use(moment)
//时间过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  // const dt = new Date(dataStr)
  // const year = dt.getFullYear()
  // const month = (dt.getMonth() + 1 + "").padStart(2, "0")
  // const day = (dt.getDate() + "").padStart(2, "0")
  // const hour = (dt.getHours() + "").padStart(2, "0")
  // const minutes = (dt.getMinutes() + "").padStart(2, "0")
  // const second = (dt.getSeconds() + "").padStart(2, "0")

  // return `${year}-${month}-${day} ${hour}:${minutes}:${second}`

  return moment(dataStr).format(pattern)
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
