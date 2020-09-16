<template>
    <div class="message_input">
        <form @submit.prevent="onSubmit">
            <input type="text" v-model="message" placeholder="type here...">
            <button type="submit">Envoyer</button>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    onSubmit () {
      this.$emit('sendMessage', this.message)
      this.message = ''
    }
  }
}
</script>
