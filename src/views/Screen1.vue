<template>
    <div>
    <h1>Screen 1</h1>
    <send-message screen="1"/>
    <!--router-link to="/screen2">Screen2</router-link-->
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
