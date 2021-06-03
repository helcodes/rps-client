import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
import store from '@/store'

//https://sable-nebulous-gondola.glitch.me/


//const url='http://localhost:8081'
let url = `${window.location.protocol}//${window.location.hostname}:8081`
//string interpolation `${javascript-code}`

/*if (process.env.VUE_APP_API_URL) {
  console.log("VUE-URL "+process.env.VUE_APP_API_URL)
  url=process.env.VUE_APP_API_URL
}*/

const io = SocketIO(url, {})

store.$socket = io

const vueSocket = new VueSocketIO({
  debug: false,
  connection: io,
  vuex : {
    store,
    actionPrefix: "socket_"
  }
})

Vue.use(vueSocket)//this.$socket is now available in all Vue-objects

Vue.config.productionTip = false

new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app')
