import Vue from 'vue'
import App from './App'

// vuex相关
import store from '@/store/index'
Vue.prototype.$store = store

import router from '@/router'
Vue.prototype.$router = router

// http相关
import http from './http';//导入封装好的http
Vue.prototype.$http = http;//微信小程序网络请求的配置

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
// console.log(Vue.prototype.$router);