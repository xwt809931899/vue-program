// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import '../static/css/reset.styl'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
<<<<<<< HEAD
import store from './vuex/store'
=======
>>>>>>> 2b6c5c6cca3e7c1163c70ae01149d0fae5183d91

Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
