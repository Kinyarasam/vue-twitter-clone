import Vue from 'vue'
import layout from './layout.routes'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        ...layout,
        {
            path: '*',
            redirect: '/twitter'
        }
    ]
})

export default router