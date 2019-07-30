
import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
const state = {
  pjtnews: 0,
  count: 1,
  num:1
}
 
const mutations = {
  addNum(state) {
    state.num += 1;
  },
  reduce(state) {
    state.count -= 1;
  }
}

const actions = {
  addNum({commit, state},data) {
    commit('addNum',data)
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
});