<template>
  <div>
    <div class="title_user">
      <p>
        Users_List
      </p>
    </div>
    <ul class="scroll_user">
        <UsersListUser
            v-for="user in users"
            :key="user.name"
            :user="user"/>
    </ul>
    <div class="stop_scroll"></div>
  </div>
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
