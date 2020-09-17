<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300;1,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import "/theme/variable.scss";

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body{
  margin: 0;
}

::-webkit-scrollbar{
  width:10px
}
::-webkit-scrollbar-track{
  background:transparent;
  border-radius:0px
}
::-webkit-scrollbar-thumb{
  background: $colGray;
  border-radius:0px
}

</style>
