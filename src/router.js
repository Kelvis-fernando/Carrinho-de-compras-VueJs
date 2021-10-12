import Vue from 'vue'
import router from 'vue-router'

import Register from '@/components/auth/Register'
import Products from '@/views/cart/Products'
import InsertItens from '@/views/insert-itens/AddItens'
import Orders from '@/components/order/Order'

Vue.use(router)

export default new router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Products
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
        },
        {
            path: '/Pedidos',
            component: Orders
        }

    ]
})