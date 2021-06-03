<template>
  <div id="app">
    <nav>
        <router-link to="/screen1">Screen 1</router-link> |
        <router-link to="/screen2">Screen 2</router-link> |
        <router-link to="/screen3">Screen 3</router-link>
    </nav>
    <h2>I am {{ socketId }}</h2>
    <h2>Messages</h2>
    <div v-for="message, id in messages" :key="id">
      {{message}}
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
        //messages: [],
        socketId: ''
    }
  },
  sockets: {
    connect() {
      this.socketId = this.$socket.id
    },
    serverMessage(arg) {
      this.messages.push(arg)
    },
    serverMessages(arg) {
      this.messages=arg
    }
  },
  computed: {
    messages() {
      return this.$store.state.messages
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
