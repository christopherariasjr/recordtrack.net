import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      userID: 1,
      email: 'christopher.arias.jr@gmail.com',
      avatarUrl:'https://placekitten.com/320/320',
      firstName: 'Chris',
      lastName: 'Arias',
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getUser: (state) => {
      return state.user
    }
  }
})
