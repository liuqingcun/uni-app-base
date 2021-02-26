import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getter'
import actions from './action'
import common from './modules/common'

export default new Vuex.Store({
  modules: {
    common
  },
  getters,
  actions,
})