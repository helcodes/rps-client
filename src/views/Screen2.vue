<template>
    <div>
    <h1>Screen 2</h1>
    <send-message screen="2"/>
    </div>
</template>



<script>
import SendMessage from '../components/SendMessage'
export default {
    components: {
        SendMessage
    },
    data () {
        return {
            message: '------'
        }
    },
    methods: {
        sendMessage(arg) {
            this.$socket.emit('message', arg)
        }
    },
    /*sockets: {
        serverMessage(arg) {
            this.message=arg
        }
    }*/
}
</script>