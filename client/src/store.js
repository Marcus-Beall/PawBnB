import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)
let baseURL = "//localhost:3000/"

let auth = Axios.create({
  baseURL: baseURL + "auth/",
  timeout: 8000,
  withCredentials: true
})

let imgApi = Axios.create({
  baseURL: baseURL + "api/",
  timeout: 20000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: baseURL + "api/",
  timeout: 8000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    pet: {},
    pets: [],
    results: [],
    query: [],
    activeResult: {},
    booking: {},
    bookings: [],
    unavailable: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setPets(state, pets) {
      state.pets = pets
    },
    currentPet(state, pet) {
      state.pet = pet
    },
    searchResults(state, results) {
      state.results = results
    },
    setActive(state, result) {
      state.activeResult = result
    },


    unavailability(state, unavailable) {
      state.unavailable = []
      let start = parseInt(unavailable.startday) * parseInt(unavailable.startmonth) + (30 * (unavailable.startmonth - 1))
      let end = parseInt(unavailable.endday) * parseInt(unavailable.endmonth) + (30 * (unavailable.endmonth - 1))
      for (let i = start; i <= end; i++) {
        state.unavailable.push(i);
      }
    },

    queryResults(state, query) {
      state.query = []
      let start = parseInt(query.startday) * parseInt(query.startmonth) + (30 * (query.startmonth - 1))
      let end = parseInt(query.endday) * parseInt(query.endmonth) + (30 * (query.endmonth - 1))
      for (let i = start; i <= end; i++) {
        state.query.push(i);
      }
    },
    setBooking(state, booking) {
      state.booking = booking
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

    //set unavailability

    setUnavailable({ commit, dispatch }, unavailable) {
      api.put('hosts/')
        .then(res => {
          let unavailableDates = res.data
          commit('setUnavailable', unavailable)
        }
        )
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
      console.log(review)
      api.post('users/' + review.hostId + '/reviews', review.reviewBody)
        .then(res => {
          commit('setActive', res.data)
        })
    },

    //USERDATA
    getHost({ commit, dispatch }, hostId) {
      api.get('profle/host' + hostId)
        .then(res => {
          commit('setUser', res.data)
        })
    },
    updateHost({ commit, dispatch }, hostData) {
      api.put('hosts/' + hostData._id, hostData)
        .then(res => {
          dispatch('setUser', hostData)
        })
    },

    upLoad({ commit, dispatch }, imgData) {
      imgApi.post('hosts/' + imgData.id + '/img', imgData)
        .then(res => {
          commit('setUser', res.data)
        })
    },

    //BOOKING
    startBooking({ commit, dispatch }, booking) {
      commit('setBooking', booking)
    },

    getBookings({ commit, dispatch }, booking) {
      commit('getBookings', booking)
    },

    makeBooking({ commit, dispatch }, booking) {
      api.post('bookings/', booking)
        .then(res => {
          commit('getBookings', res.data)
        })
    },

    onUpload({ commit, dispatch }, imgFile) {
      api.post('hosts/' + imgFile.userId + '/img', imgFile.file)
        .then(res => {
          commit('setUser', res.data)
        })
    },

    //Pet Data
    createPet({ commit, dispatch }, petData) {
      api.post('pets/', petData)
        .then(res => {
          dispatch("getPets", petData.ownerId)
        })
    },
    setPet({ commit, dispatch }, petData) {
      console.log(petData)
      commit('currentPet', petData)
    },

    getPets({ commit, dispatch }, ownerId) {
      api.get('pets/' + ownerId)
        .then(res => {
          commit('setPets', res.data)
        })
    },
    updatePets({ commit, dispatch }, petData) {
      api.put('pets/', petData)
        .then(res => {
          commit('setPets', res.data)
        })
    },
    updatePet({ commit, dispatch }, petData) {
      api.put('pets/', petData)
        .then(res => {
          commit('setPet', res.data)
        })
    },
    deleteUserImage({ commit, dispatch }, imgData) {
      api.delete('hosts/' + imgData.userId + '/img/' + imgData.index)
        .then(res =>
          commit('setUser', res.data))
    }
  }
})
