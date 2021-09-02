import Vue from 'vue'
import router from 'vue-router'

import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import Products from '@/views/cart/Products'
import InsertItens from '@/views/insert-itens/AddItens'

Vue.use(router)

export default new router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/produtos',
            component: Products
        },
        {
            path: '/adicionar',
            component: InsertItens
        }
    ]
})