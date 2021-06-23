import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Login from '../views/Login'
import Game from '../views/Game'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/game',
        name: 'game',
        component: Game
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

/**/if (!store.getters.loggedIn) {console.log("x")}

router.beforeEach((to, from, next) => {
    if (store.getters.loggedIn && to.name == 'login') {
      console.log("a")
      next('game')
    } else if (! store.getters.loggedIn && to.name != 'login') {
      console.log("b")
      next('login')
    }
    else {
      next()
    }
  })

export default router