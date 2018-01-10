/**
 * Created by miaoce on 17/7/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations
})
