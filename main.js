import Vue from 'vue'
import App from './App'
import store from "@/Vuex/store.js"

import "./utils/filters.js"//过滤器

import request from "./request/request.js"
Vue.prototype.$request = request

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
