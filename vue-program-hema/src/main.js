// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
<<<<<<< HEAD
import '../static/css/reset.styl'
=======
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
>>>>>>> 0fc9ac4e5f2b4f4b036976ecff2c011894cefece

Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
