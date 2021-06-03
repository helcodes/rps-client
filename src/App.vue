<template>
  <div id="app">
   
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
  }/*,
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
  }*/
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
