import Vue from 'vue'
import VueRouter from 'vue-router'

import Screen1 from '../views/Screen1'
import Screen2 from '../views/Screen2'
import Screen3 from '../views/Screen3'

Vue.use(VueRouter)

const routes = [
    {
        path: '/screen1',
        name: 'screen1',
        component: Screen1
    },
    {
        path: '/screen2',
        name: 'screen2',
        component: Screen2
    },
    {
        path: '/screen3',
        name: 'screen3',
        component: Screen3
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})

export default router