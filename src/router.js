import Vue from 'vue'
import router from 'vue-router'

// import SideAuth from './template/SideAuth'
import Login from './auth/Login'

Vue.use(router)

export default new router({
    mode: 'history',
    routes: [{
            name: 'default',
            path: '/',
            component: Login,
            meta: {
                guest: true,
                public: true,
            },
        },
        /* AUTH */
        // {
        //     name: 'auth',
        //     path: '/auth',
        //     component: SideAuth,
        //     children: [
        //         /* LOGIN */
        //         {
        //             name: 'login',
        //             path: 'login',
        //             component: Login,
        //         },

        //     ],
        // },
    ]
})