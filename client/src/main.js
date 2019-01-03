// @ts-ignore
import Vue from 'vue'
import './plugins/vuetify'
// @ts-ignore
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/quasar.styl'
import 'quasar-extras/animate'
import 'quasar-extras/material-icons'
import 'quasar-extras/fontawesome'
// @ts-ignore
import Quasar from 'quasar'
// @ts-ignore
import VueBase64FileUpload from 'vue-base64-file-upload';

// @ts-ignore
Vue.use(Quasar, {
  config: {}
})

Vue.config.productionTip = false

// @ts-ignore
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
