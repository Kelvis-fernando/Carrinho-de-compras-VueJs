import Vue from 'vue'
import VueRouter from 'vue-router'

import SideAuth from './template/SideAuth'
import Login from './auth/Login'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: Login
        },
        /* AUTH */
        {
            name: 'auth',
            path: '/auth',
            component: SideAuth,
            children: [
                /* LOGIN */
                {
                    name: 'login',
                    path: 'login',
                    component: Login,
                },

            ],
        },
    ]
})