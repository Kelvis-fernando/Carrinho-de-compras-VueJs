import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://carrinho-de-compras-153ad-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://carrinho-de-compras-153ad-default-rtdb.firebaseio.com/',
        })
    }
})