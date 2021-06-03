<template>
    <div>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
export default {
  name: 'Game',
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
</style>