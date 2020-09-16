<template>
    <div class="content">
        <UsersList :users="store.users" class="content_userList"/>
        <div class="content_message">
            <MessagesList :messages="store.messages"/>
            <MessageBox @sendMessage="onSendMessage"/>
        </div>
    </div>
</template>

<script >
import MessageBox from '../components/MessageBox.vue'
import MessagesList from '../components/MessagesList.vue'
import UsersList from '../components/UsersList.vue'

import store from '../store'

export default {
  data () {
    return {
      store
    }
  },
  methods: {
    onSendMessage (text) {
      store.messageNew(text)
    }
  },
  components: {
    MessageBox,
    MessagesList,
    UsersList
  }
}
</script>

<style lang="scss">
@import "../theme/variable.scss";

    .content{
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
        justify-content: space-between;
        height: 100vh;
        // max-width: 1280px;
        margin: auto;

        &_message{
            display: flex;
            flex-flow: column wrap;
            align-items: center;
            justify-content: space-between;
            width: 80%;
            height: 100%;
            background-color: $colBlack;

            ul{
                height: calc(100% - 60px);
                overflow-y: scroll;
                overflow-x: hidden;
                width: 100%;

                li{
                    padding: 25px;
                    border-top: 1px dotted $colGray;
                    color: $colWhite;

                    .user_name{
                        display: block;
                        font-weight: 700;
                        margin: 15px;
                    }
                }

                .message_user{
                    background-color: rgba($colGray,0.2);
                    text-align: right;

                }

            }
            .message_input{
                height: 59px;
                position: relative;
                width: 100%;
                margin: auto;
                border-top: 1px solid $colGray;

                form{
                    width: 95%;

                    input{
                        height: 59px;
                        width: 100%;
                        padding: 0;
                        margin: 0;
                        border: none;
                        background: transparent;
                        color: $colWhite;
                        padding: 0 25px;

                        &:active{
                            border: none;
                        }
                    }
                }
                button{
                    position: absolute;
                    top: 50%;
                    right: 5%;
                    transform: translate(-50%,-50%);
                    border: none;
                    background: transparent;
                    color: $colWhite;
                }
            }
        }
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .content_userList{
        width: 20%;
        height: 100%;
        background-color: $colWhite;

        li{
            margin: 15px 25px;

        }
    }

</style>
