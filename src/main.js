import store from './store/Products-stage'
import router from './router'
import App from './App.vue'
import Vue from 'vue'
import '@babel/polyfill'
import './plugins/axios'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './plugins/bootstrap-vue'

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.filter('dinheiro', valor => {
    return `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');