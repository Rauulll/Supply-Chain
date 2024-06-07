import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  plugins: [createPersistedState()],
  state: {
    user: {
      role: null,
      token: null
    }
  },
  mutations: {
    setToken (state, token) {
      state.user.token = token
    },
    setRole (state, role) {
      state.user.role = role
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token)
    },
    setRole ({ commit }, role) {
      commit('setRole', role)
    }
  }
})
