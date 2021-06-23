<template>
  <v-container>
      <v-card-title>Choose your opponent!</v-card-title>

      <v-card-text>
        <v-list v-if="users.length > 0">
          <v-list-item-group
          color="primary"
          >
            <v-list-item v-for="otherUser, id in users" :key="id" @click="requestMatch(otherUser)">
              <v-list-item-icon>
                <v-icon v-if="otherUser.matchRequest == user.username">mdi-flag</v-icon>
                <v-icon v-else>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-if="otherUser.matchRequest == user.username">{{otherUser.username}} wants to play</v-list-item-title>
                <v-list-item-title v-else>{{otherUser.username}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-banner
          elevation="2"
          v-if="users.length == 0"
          icon="mdi-account"
        >
          No players available
        </v-banner>        
      </v-card-text>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    requestMatch(user) {
      this.$store.dispatch('requestMatch', user)
    }
  },
  computed: {
    users() {
      return this.$store.state.users
        .filter(user => user.username !== this.user.username)
        .filter(user => user.inMatch == false)
    },
    user () {
      return this.$store.state.user
    }
  }
}
</script>

<style scoped>
</style>