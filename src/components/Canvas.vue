<template>
    <div class="content_canvas" ref="cristals">
        <img src="../assets/tchatche.gif" alt="" ref="images"
        v-for="i in 25" 
        :key="i"
        :style="{height: Math.floor(Math.random() * 10 + 'px')}">
    </div>
</template>

<style lang="scss">
    @import "../theme/variable.scss";
    .content_canvas{
        position: absolute;
        top: 0%;
        right: 0%;
        width: 80%;
        height: calc(100% - 60px);
        z-index: 200;
        background-color: $colBlack;
        overflow: hidden;
        opacity: 0;
        visibility: hidden;
        transition: .7s cubic-bezier(0,.72,.31,.99);

        img{
            position: absolute;
            max-height: 700px;
        }

    }

    .open_cristal{
        visibility: visible;
        opacity: 1;
    }
</style>

<script>
import cristalGif from '../assets/tchatche.gif'
import halo from '../assets/halo_song.mp3'

const audio = new Audio(halo)

export default {
    data(){
        return{
            playing: false
        }
    },
    mounted(){
        audio.addEventListener("playing", () =>{
            this.playing = true
        })
        audio.addEventListener("pause", ()=>{
            this.playing = false
        })
    },
    methods: {
        draw(){
            let img = this.$refs.images
            let content = this.$refs.cristals
            if(this.playing){
                audio.pause()
            }else{
                audio.play()
            }


            content.classList.toggle('open_cristal')
            img.forEach(element => {
                element.style.top = Math.random() * 800 + 'px'
                element.style.left = Math.random() * 1200 + 'px'
                element.style.height = Math.floor(Math.random() * 500) + 'px'
            });

        }
    }
}
</script>
