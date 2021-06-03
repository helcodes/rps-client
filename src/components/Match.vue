<template>
  <div class="about">
    <h1>Match</h1>
    <h2 v-if="counter != 0">{{ counter }}</h2>
    <div v-if="counter == 0 && !turn">
        <button @click="makeTurn('rock')">Rock</button>
        <button @click="makeTurn('paper')">Paper</button>
        <button @click="makeTurn('scissors')">Scissors</button>
    </div>
    <div v-if="turn">
      <div>Your choice: {{ turn }}</div>
      <div>Waiting for opponent...</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      counter: 3
    }
  },
  mounted () {
    let interval = setInterval(() => {
      this.counter--
      if (this.counter == 0) {
        clearInterval(interval)
      }
    }, 1000)
  },
  methods: {
    makeTurn(turn) {
      this.$store.dispatch('makeTurn', {turn: turn})
    }
  },
  computed: {
    turn() {
      return this.$store.state.turn
    },
    mode() {
      return this.$store.state.mode
    }
  }
}
</script>