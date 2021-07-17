import Vue from 'vue'
import Vuex from 'vuex'

import city from './city'

// import axios from 'axios'

import { HIDE_TABBAR_MUTATION, SHOW_TABBAR_MUTATION } from '@/type'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 自定义共享状态
    // isTabbarShow: true,
  },
  mutations: {
    // HideTabbar(state, data) {
    [HIDE_TABBAR_MUTATION] (state, data) {
      // console.log('隐藏Tabbar')
      state.isTabbarShow = data
    },
    // ShowTabbar(state, data) {
    [SHOW_TABBAR_MUTATION] (state, data) {
      // console.log('显示Tabbar')
      state.isTabbarShow = data
    },
  },
  actions: {
  },
  modules: {
    city
  }
})
