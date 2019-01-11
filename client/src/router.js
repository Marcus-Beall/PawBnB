import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import DefaultLayout from './layouts/Default.vue'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import Login from './views/Login.vue'
// @ts-ignore
import ResultPage from './views/ResultPage.vue'
// @ts-ignore
import Results from './views/Results.vue'
// @ts-ignore
import Profile from './views/UserProfile.vue'
// @ts-ignore
import Host from './views/HostProfile.vue'
// @ts-ignore
import Booking from './views/Bookings.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/results',
          name: 'results',
          component: Results
        },
        {
          path: '/results/result',
          name: 'resultPage',
          component: ResultPage,
          props: true
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile
        },
        {
          path: '/profile/host',
          name: 'host',
          component: Host
        },
        {
          path: 'profile/host/bookings',
          name: 'bookings',
          component: Booking
        },
        {
          path: '*',
          redirect: '/'
        }
      ]
    }
  ]
})
