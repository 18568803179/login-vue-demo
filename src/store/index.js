import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import persist from 'vuex-persist'

export default new Vuex.Store({
  state: {
    shop: []
  },
  mutations: {
    add(state, obj) {
      let flag = true
      state.shop.forEach(item => {
        if (item.id == obj.id) {
          item.num++
          flag = false
        }
      });
      if (flag == true) {
        Vue.set(obj, 'num', 1)
        state.shop.push(obj)
      }
    },
    del(state,obj){
      
    }
  },
  actions: {},
  modules: {},
  plugins: [
    new persist({
      storage: window.localStorage,
    }).plugin,
  ],
})