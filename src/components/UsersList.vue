<template>
    <ul>
        <UsersListUser
            v-for="user in users"
            :key="user.name"
            :user="user"/>
    </ul>
</template>

<script>
import UsersListUser from './UsersListUser'

export default {
  props: {
    users: {
      type: Array
    }
  },
  components: {
    UsersListUser
  }
}
</script>
