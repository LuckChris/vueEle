import Vue from 'vue'
import Vuex from 'vuex'
// import mutations from './mutations'
// import actions from './action'
// import getters from './getters'

Vue.use(Vuex)
let isLogin = false
let userInfo = {}
if(sessionStorage.getItem('user') != '') {
  isLogin = true
  userInfo = JSON.parse(sessionStorage.getItem('user'))
}

export default new Vuex.Store({
  state : {
    userInfo: userInfo, // 用户信息,
    currentAddress:{
      latitude:'', // 当前纬度
      longitude:'',// 当前经度
    },
    isLogin:isLogin,
    geohash: '31.22299,121.36025',//地址geohash值

  },
  mutations: {
    // 保存用户信息
    saveUserInfo(satte,item) {
      satte.userInfo = item
      sessionStorage.setItem('user', JSON.stringify(item))
    },
    // 保存经纬度
    saveGeohash(state, value) {
      state.geohash = value
    },

    // 保存当前经纬度
    recordAddress(state, value) {
      state.currentAddress = value
    }

  }
})
