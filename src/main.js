import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import router from './plugins/router'

// Lightbox
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
Vue.use(CoolLightBox)

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
