<template>
    <div>
        <div v-if="screen == 'idle'">
            <idle />
        </div>
        <div v-else-if="screen == 'match'">
            <match />
        </div>
        <div v-else-if="screen == 'result'">
            <result/>
        </div>
    </div>
</template>

<script>
import Match from '@/components/Match'
import Idle from '@/components/Idle'
import Result from '@/components/Result'

export default {
  name: 'Game',
  components: {
      Match,
      Idle,
      Result
  },
  computed: {
      screen () {
          return this.$store.state.screen
      }
  }
}
</script>

<style scoped>
span {
  margin: 10px;
}

li:hover {
  background-color: rgba(200,50,50,0.8);
}
</style>