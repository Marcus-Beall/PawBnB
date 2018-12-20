import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)
let baseURL = "//localhost:3000/"

let auth = Axios.create({
  baseURL: baseURL + "auth/",
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: baseURL + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    pet: {},
    results: [],
    query: [],
    activeResult: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    searchResults(state, results) {
      state.results = results
    },
    setActive(state, result) {
      state.activeResult = result
    },
    queryResults(state, query) {
      state.query = []
      let start = parseInt(query.startday) * parseInt(query.startmonth) + (30 * (query.startmonth - 1))
      let end = parseInt(query.endday) * parseInt(query.endmonth) + (30 * (query.endmonth - 1))
      for (let i = start; i <= end; i++) {
        state.query.push(i);
      }
    }
  },
  actions: {
    //Auth
    register({ commit, dispatch }, user) {
      auth.post('register', user)
        .then(res =>
          commit('setUser', res.data))
      router.push({ name: 'home' })
    },
    login({ commit, dispatch }, user) {
      auth.post('login', user)
        .then(res =>
          commit('setUser', res.data))
      router.push({ name: 'home' })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res =>
          commit('setUser', res.data))
    },
    logout({ commit, dispatch }) {
      auth.delete('logout')
        .then(res =>
          commit('setUser', res.data))
    },
    //Search
    searchHosts({ commit, dispatch }, query) {
      api.get('hosts/' + query.zipcode)
        .then(res => {
          let results = res.data
          commit('searchResults', results)
          commit('queryResults', query)
          router.push({ name: 'results' })
        })
    },
    searchUsers({ commit, dispatch }, query) {
      api.get('hosts', query)
        .then(res => {
          let results = res.data
          commit('searchResults', results)
        })
    },
    activeResult({ commit, dispatch }, result) {
      commit('setActive', result)
    },
    newReview({ commit, dispatch }, review) {
      debugger
      console.log(review)
      api.post('users/' + review.hostId + '/reviews', review.reviewBody)
        .then(res => {
          commit('setActive', res.data)
        })
    }
  }
})
