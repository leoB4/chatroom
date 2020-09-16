<template>
  <div class="content">
    <div id="content_grid">
      <div v-parallax="0.2" class="grid gFirst"></div>
      <div v-parallax="0.6" class="grid gScnd"></div>
    </div>
    <div class="white_diamond">
      <img src="../assets/CristalB.svg" alt="" class="">
    </div>
    <div class="black_diamond">
      <img src="../assets/CristalN.svg" alt="" class="">
    </div>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="username" />
      <button>connect</button>
    </form>
  </div>
</template>

<script>
import store from '../store'

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
  }
}

// let whiteD = document.querySelector('.white_diamond')
// let blackD = document.querySelector('.black_diamond')

// whiteD.addEventListener("click", openDiamond)

// function openDiamond(){
//   whiteD.style.animation = ""
//   whiteD.style.top = "30%"
//   blackD.style.animation = ""
//   blackD.style.top = "80%"
// }
</script>

<style lang="scss">
  .white_diamond{
    width: 100px;
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-50%,-50%);
    z-index: 16;
    animation: floatB 3s infinite ease-in-out;
  }
  .black_diamond{
    width: 100px;
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%,-50%);
    z-index: 15;
    animation: floatN 3s infinite ease-in-out;
  }
  .content{
    height: 100vh;
    position: relative;
  }

  form{
    position: absolute;
    z-index: 10;
  }
  .grid{
    background-image: url('../assets/FondPoints.png');
    width: 100%;
    height: 100%;
  }

  .gScnd{
    transform: scale(0.98);
    position: absolute;
    z-index: 5;
  }

  @keyframes floatB{
    0%{
      top: 35%;
    }
    50%{
      top: 37%;
    }

    100%{
      top: 35%;
    }
  }
  @keyframes floatN{
    0%{
      top: 55%;
    }
    70%{
      top: 57%;
    }

    100%{
      top: 55%;
    }
  }

</style>
