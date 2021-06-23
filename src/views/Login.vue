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

      <h2>Choose interaction mode</h2>
      <div>
          <input type="radio" id="buttons" value="buttons" v-model="mode" />
          <label for="buttons">Buttons</label>
          <br />
          <input type="radio" id="gesture" value="gesture" v-model="mode" />
          <label for="gesture">Gesture</label>
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
    },
    get() {
        return this.$store.state.mode
    },
    set(value) {
      this.$store.dispatch('setMode', value)
    }
  }
}
</script>

<style scoped>
.input {
  margin: 2em;
}
</style>