import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        messages: []
    },
    mutations: {
        SEND_MESSAGE(state, payload) {
            state.messages.push(payload)
        },
        SEND_MESSAGES(state, payload) {
            state.messages=payload
        }
    },
    actions: {
        sendMessage(context, payload) {
            context.commit('SEND_MESSAGE', payload)
            this.$socket.emit('message', {
                screen: payload.screen
            })
        },
        
        socket_serverMessage(context, payload) {
            context.commit('SEND_MESSAGE', payload)
        },
        
        socket_serverMessages(context, payload) {
            context.commit('SEND_MESSAGES', payload)
        }
    }
})

export default store