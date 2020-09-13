import Vue from 'vue'
import Vuex from 'vuex'
// import { getItem , setItem , removeItem} from '@utils/storage.js'
Vue.use(Vuex)

const tokenKey = 'toutiao_user'
export default new Vuex.Store({
  state: {
    user: JSON.parse(window.localStorage.getItem(tokenKey))
    // user: ''
  },
  mutations: {
    saveUser (state, data) {
      state.user = data
      window.localStorage.setItem(tokenKey, JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
