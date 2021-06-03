<template>
  <div class="about">
    <h1>Result</h1>
    <div v-if="winner">{{winner.username}} wins!</div>
    <div v-if="winner == null">Draw!</div>
    <table>
      <tr v-for="(user, id) in users" :key="id">
        <td>{{user.username}}</td><td>{{user.turn}}</td>
      </tr>
    </table>
    <button @click="newMatch">Start a new match</button>
  </div>
</template>

<script>
export default {
  methods: {
    newMatch() {
      this.$store.dispatch('newMatch')
    }
  },
  computed: {
    winner() {
      return this.$store.state.winner
    },
    users() {
      return this.$store.state.users
    }
  }
}
</script>