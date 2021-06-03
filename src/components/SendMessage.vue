<template>
    <div>
        <button @click="sendMessage()">Send message</button>
    </div>
    
</template>


<script>
export default {
    props: ['screen'],
    methods: {
        sendMessage() {
            //this.$socket.emit('message', {
                //screen: payload.screen
            /*this.$store.emit('message', {
                screen: this.screen
            })*/
            this.$socket.dispatch('sendMessage', {
                screen: this.screen
            })
        }
    }
}
</script>

