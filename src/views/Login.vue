<template>
  <div>
      <div class="input">
        Enter a username: <input
          type="text"
          name="username"
          class="username"
          placeholder="Username"
          v-model.trim="username"
          @keyup.enter="enterGame"
        />
      </div>
      <div v-if="userExists">
        Username already taken
      </div>
      <div>
          <button @click="enterGame">Enter game</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
      return {
          username: ''
      }
  },
  methods: {
    enterGame () {
      this.$store.dispatch('login', this.username)
    }
  },
  computed: {
    userExists() {
      return this.$store.state.invalidUser
    }
  }
}
</script>

<style scoped>
.input {
  margin: 2em;
}
</style>