import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const bootstrap = require('bootstrap')
Vue.use(bootstrap)

import { library } from '@fortawesome/fontawesome-svg-core'
import {  faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add( faFacebookSquare, faTwitterSquare, faInstagramSquare ) 

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
