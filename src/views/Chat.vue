<template>
    <div class="content">
        <UsersList :users="store.users" class="content_userList"/>
        <Canvas ref="canvas" />
        <div class="content_message">
            <div class="title_chat">
                <p>
                    tchat_window_
                </p>
            </div>
            <MessagesList :messages="store.messages"/>
            <MessageBox @sendMessage="onSendMessage"/>
        </div>
    </div>
</template>

<script >
import MessageBox from '../components/MessageBox.vue'
import MessagesList from '../components/MessagesList.vue'
import UsersList from '../components/UsersList.vue'
import Canvas from '../components/Canvas.vue'

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
    UsersList,
    Canvas
  },
  mounted(){
      store.$on('command', (cmd) =>{
        if(cmd === 'cristal'){
            this.$refs.canvas.draw()
        }
      })
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
            position: relative;

            .title_chat{
                position: absolute;
                top: 0;
                width: 100%;
                height: 60px;
                border-bottom: 1px solid $colWhite;
                background-color: $colBlack;
                display: flex;
                align-items: center;
                justify-content: space-around;
                font-family: 'Press Start 2P', cursive;

                p{
                    padding-left: 40px;
                    width: 100%;
                    color: $colWhite;
                }
            }

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
                        font-size: 18px;
                        margin: 15px;
                        font-family: 'Press Start 2P', cursive;
                    }

                    .user_message{
                        p{
                            margin: 0 25px;
                        }
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
                        width: 95%;
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
                    right: -5%;
                    transform: translate(-50%,-50%);
                    border: none;
                    background: transparent;
                    background-image: url('../assets/envoyer.svg');
                    background-position: center;
                    background-size: cover;
                    width: 50px;
                    height: 25px;
                    cursor: pointer;
                    transition: .3s  ease-in-out;

                    &:hover{
                        transform: translate(-50%,-50%) scale(0.8);
                    }
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
        position: relative;

        .title_user{
            height: 60px;
            width: 20%;
            background: $colWhite;
            border-bottom: 1px solid $colBlack;
            display: flex;
            padding-left: 40px;
            position: fixed;
            font-family: 'Press Start 2P', cursive;
        }
        .scroll_user{
            padding-top: 60px;
            height: calc(100vh - 120px);
            overflow-y: scroll;

            .profil_user{
                margin: 20px;

                .profil_crystal{
                    width: auto;
                    height: 60px;
                    display: inline-block;
                    vertical-align: middle;
                }
                li{
                    margin: 15px 25px;
                    display: inline-block;
                    vertical-align: middle;
                    font-family: 'Press Start 2P', cursive;
                    font-size: 18px;

                }
            }
        }
        .stop_scroll{
            height: 59px;
            width: 20%;
            background: $colWhite;
            bottom: 0;
            z-index: 10;
            position: fixed;
            border-top: 1px solid $colBlack;
        }
    }

    body{
        background-color: #000;
    }

</style>
