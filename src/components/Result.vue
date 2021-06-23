<template>
  <div class="about">
    <v-card-title>Result</v-card-title>
    <v-card-text>
      <v-simple-table>
        <thead>
          <tr>
            <th class="text-center">Username</th>
            <th class="text-center">Turn</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, id) in result.players" :key="id">
            <td class="text-center">{{user.username}}</td>
            <td class="text-center">{{user.turn}}</td>
          </tr>
        </tbody>
      </v-simple-table>

      <v-banner 
        elevation="2"
        color="rgb(200,200,200)">
        <div class="font-weight-bold text-center" v-if="result.winner">{{result.winner.username}} wins!</div>
        <div class="font-weight-bold text-center" v-if="result.winner == null">Draw!</div>
      </v-banner>

    </v-card-text>

    <v-card-actions>
      <v-btn @click="newMatch">Start a new match</v-btn>
    </v-card-actions>
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
    result () {
      return this.$store.state.result
    }
  }
}
</script>