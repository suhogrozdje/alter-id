import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import router from './plugins/router'

// Lightbox
// import CoolLightBox from 'vue-cool-lightbox'
// import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
// Vue.use(CoolLightBox)

import VueScrollTo from 'vue-scrollto'

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 1000,
  easing: "ease",
  offset: -60,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.config.productionTip = false

new Vue({
  el: "#app",
  router,
  created () {
    document.title = this.$route.meta.title;
  },
  vuetify,
  render: h => h(App)
})
