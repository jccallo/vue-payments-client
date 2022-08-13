import Vue from 'vue'
import App from './App.vue'

// import axios and vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// import vue-router
import router from './router';

// import bootstrap-vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// import swall
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'; // If you don't need the styles, do not connect
Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
