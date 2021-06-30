<template>
  <div id="app">
    <navigation>
    </navigation>
    <div class="page-container">
      <router-view></router-view>
    </div>
    <div class="footer">
      <div class="content">

      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './components/navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  },
  watch: {
    '$route' (to) {
      document.title = to.meta.title || 'The Buffed Bear! A strength gaining program'
    }
  },
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}

a{
  text-decoration: none;
}

#app {
  font-family: "nimbus-sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fafaf5;
  min-height: 100vh;
  position: relative;
}

.page-container{
}

.content {
  width: 1100px;
  margin: 0 auto;
  clear: both;
  overflow: hidden;
}


/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (max-width: 1439px) {

  h2{
    font-size: 48px !important;
  }

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 1199px) {
  .content{
    width: calc(100% - 80px) !important;
    margin: 0 40px;
  }

}


/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 991px) {

}


/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 767px) {
  .content{
    width: calc(100% - 40px) !important;
    margin: 0 20px;
  }

  h2{
    font-size: 28px !important;
    line-height: 30px !important;
  }

  .descriptions .content p{
    font-size: 22px !important;
    line-height: 36px !important;
  }

  .page .intro h1 {
    margin-top: 70px !important;
    font-size: 40px !important;
  }

}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .descriptions .content ul {
    margin-left: 20px !important;
  }
}


</style>
