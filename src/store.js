import Vue from 'vue'
import io from 'socket.io-client'
import router from './router'
import jaune from './assets/jaune.mp3'

const socket = new io('https://bddi-2019-chat.herokuapp.com/')

const store = new Vue({
  data: {
    isRegistered: false,
    error: [],
    user: {},
    users: [],
    messages: [],
    soundJaune: new Audio(jaune)
  },
  watch: {
    isRegistered (registered) {
      if (registered) {
        router.push('/')
      } else {
        router.push('/login')
      }
    }
  },
  methods: {

    registerListeners () {
      socket.on('connect', () => {
        console.log('connected')
        const sessionUser = sessionStorage.getItem('user')

        if (sessionUser) {
          store.userRegister(JSON.parse(sessionUser).username)
        }
      })
      socket.on('disconnect', () => {
        this.isRegistered = false
        this.user = {}
      })
      socket.on('users update', ({ users }) => {
        this.users = users
      })
      socket.on('user registered', (user) => {
        this.isRegistered = true
        console.log('user register', user)
        this.user = user
        sessionStorage.setItem('user', JSON.stringify(user))
      })
      socket.on('messages update', ({ messages }) => {
        this.messages = messages
      })
      socket.on('message new', ({ message }) => {
        this.messages.push(message)
      })
      socket.on('command new', (data) => {
        switch (data.command) {
          case 'jaune':
            this.playJaune()
            break
          case 'jauneStop':
            this.stopJaune()
            break
          case 'cristal':
            this.cristal()
            break
        }
      })
      socket.on('chat error', (error) => {
        console.log('chat error', error.message)
      })
    },
    userRegister (username) {
      socket.emit('user register', { username })
    },
    userTyping () {

    },
    messageNew (message) {
      socket.emit('message new', message)
    },
    logout () {
      sessionStorage.clear()
      socket.disconnect()
      this.isRegistered = false
      router.push('/login')
    },
    playJaune () {
      this.$data.soundJaune.play()
    },
    stopJaune () {
      this.$data.soundJaune.pause()
    },
    cristal () {

    }
  },
  created () {
    this.registerListeners()
  }
})

export default store
