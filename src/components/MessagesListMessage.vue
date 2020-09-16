<template>
    <li v-bind:class = "(isCurrentUser)?'message_user':'message_other'">
        <span class="user_name"> {{message.user.username}} </span>
        <span class="user_message">>..{{ message.text}}</span>
    </li>
</template>

<script>
import store from '../store'
export default {
  computed: {
    isCurrentUser () {
      console.log(this.message.user.username, store.$data.user.username)
      return this.message.user.username === store.$data.user.username
    }
  },
  props: {
    message: {
      type: Object,
      required: true
    }
  }
}
</script>
