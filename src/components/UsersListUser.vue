<template>
  <div class="profil_user">
    <img :src="cristalSRC" alt="" class="profil_crystal">
    <li>{{ user.username }}</li>
  </div>
</template>

<script>
import cristalSRC from '../assets/petit_cristal.svg'

export default {
  data () {
    return {
      cristalSRC
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
