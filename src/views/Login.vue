<template>
  <div class="content" ref="content">
    <div ref="wrapper" class="content_grid">
      <div data-depth="0.2" class="grid gFirst"></div>
      <div data-depth="-0.1" ref="gScnd" class="grid gScnd"></div>
    </div>
    <div class="white_diamond" ref="wDiamond">
      <img src="../assets/CristalB.svg" alt="" class="img_wDiamond">
    </div>
    <div class="black_diamond" ref="bDiamond">
      <img src="../assets/CristalN.svg" alt="" class="img_bDiamond">
    </div>
    <form @submit.prevent="onSubmit" ref="form" class="form_login">
      <div class="form_content" ref="formContent">
        <input type="text" v-model="username" placeholder="Mets ton pseudo et appuie sur entrée" />
        <button></button>
      </div>
    </form>
  </div>
</template>

<script>
import store from '../store'
import Parallax from 'parallax-js'

export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    onSubmit () {
      store.userRegister(this.username)
      this.username = ''
    }
  },
  mounted () {
    const scene = this.$refs.wrapper
    const parallaxInstance = new Parallax(scene, { relativeInput: true })
    scene.style.width = '100vw'
    scene.style.height = '100vh'

    const whiteD = this.$refs.wDiamond
    const blackD = this.$refs.bDiamond
    const content = this.$refs.content
    const form = this.$refs.form
    const formContent = this.$refs.formContent

    whiteD.addEventListener('click', openDiamond)

    function openDiamond () {
      console.log('open')
      whiteD.classList.add('openedW')
      blackD.classList.add('openedB')
      content.classList.add('black_content')
      form.classList.add('scale_up')
      formContent.classList.add('visible')
    }
  }
}

</script>

<style lang="scss">
  @import "../theme/variable.scss";

  .white_diamond{
    width: 100px;
    height: 210px;
    position: absolute;
    left: 50%;
    top: calc(50% - 95px);
    transform: translate(-50%,-50%);
    z-index: 16;
    transition: 1s ease-in-out;
    cursor: pointer;
    transition: .7s cubic-bezier(0,.88,.3,1.09);
  }
  .openedW{
    top: calc(42% - 95px);
  }
  .openedB{
    top: calc(58% + 95px)!important;
  }

  .img_wDiamond{
    animation: floatB 3s infinite ease-out;
    position: absolute;
  }
  .img_bDiamond{
    animation: floatN 3s infinite ease-out;
    position: absolute;
  }
  .black_diamond{
    width: 100px;
    height: 280px;
    position: absolute;
    left: 50%;
    top: calc(50% + 95px);
    transform: translate(-50%,-50%);
    z-index: 15;
    transition: .7s cubic-bezier(0,.88,.3,1.09);
  }
  .content{
    height: 100vh;
    position: relative;
    overflow: hidden;
    background-color: $colWhite;
    transition: .3s ease-in-out;
  }
  .black_content{
    background-color: $colBlack;
  }

  form{
    position: absolute;
    z-index: 10;
  }
  .grid{
    background-image: url('../assets/FondPoints.png');
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .gScnd{
    transform: scale(0.95);
    z-index: 5;
  }

  .contet_grid{
    position: relative;
    width: 100vw;
    height: 100vh;
  }

  .form_login{
    width: 100vw;
    height: 40px;
    position: absolute;
    top: 48%;
    transform: translateY(-50%) scaleX(0);
    background: $colWhite;
    transition: .7s .5s cubic-bezier(0,.72,.31,.99);

    .form_content{
      transition: .7s 1s ease-in-out;
      opacity: 0;
      input{
        width: 100%;
        height: 40px;
        border: none;
        text-align: center;
        color: $colBlack;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;

        &::placeholder{
          text-align: center;
          font-weight: 700;
          font-style: italic;
          color: $colGray;
        }
      }
      button{
        background:transparent;
        border: none;
      }
    }

  }
  .scale_up{
    transform: translateY(-50%) scaleX(1);

    .visible{
      opacity: 1;
    }
  }

  @keyframes floatB{
    0%{
      top: 0;
    }
    50%{
      top: -15px;
    }

    100%{
      top: 0;
    }
  }
  @keyframes floatN{
    0%{
      top: 0;
    }
    70%{
      top: -10px;
    }

    100%{
      top: 0;
    }
  }

</style>
