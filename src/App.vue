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
/* @import 'typeface-roboto' */

body{
  margin: 0;
  padding: 0;
}

a{
  text-decoration: none;
  /*display: inline-block;*/
  /*border-bottom: 1px dashed #194772;*/
  /*color: #0f518d;*/
  /*padding-bottom: -5px;*/
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
  padding-bottom: 100px;
}

.content {
  width: 1100px;
  margin: 0 auto;
  clear: both;
  overflow: hidden;
}


/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (max-width: 1439px) {
  #index .intro {
    height: 380px !important;
  }

  .logo {
    height: 450px !important;
  }

  .bb{
    background-size: 650px !important;
  }

  .blocker{
    font-size: 32px !important;
    line-height: 40px !important;
  }

  h2{
    font-size: 32px !important;
    line-height: 40px !important;
  }

  .descriptions .content p{
    font-size: 22px !important;
    line-height: 36px !important;
  }

  .page .intro {
    height: 140px !important;
  }

  .page .intro h1 {
    margin-top: 70px !important;
    font-size: 40px !important;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (max-width: 1199px) {
  .content{
    width: calc(100% - 80px) !important;
    margin: 0 40px;
  }

  #index .intro {
    height: 320px !important;
  }

  .logo {
    height: 380px !important;
  }

  .bb{
    background-size: 580px !important;
    height: 80px !important;
  }

  .blocker{
    line-height: 48px !important;
  }
}


/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 991px) {

  #index .intro {
    height: 280px !important;
  }

  .logo {
    height: 320px !important;
  }

  .bb{
    background-size: 500px !important;
    height: 80px !important;
  }
}


/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 767px) {
  .content{
    width: calc(100% - 40px) !important;
    margin: 0 20px;
  }

  .blocker{
    font-size: 28px !important;
    line-height: 40px !important;
    margin-top: 10px !important;
  }

  h2{
    font-size: 28px !important;
    line-height: 30px !important;
  }

  .descriptions .content p{
    font-size: 22px !important;
    line-height: 36px !important;
  }

  .page .intro {
    height: 140px !important;
  }

  .page .intro h1 {
    margin-top: 70px !important;
    font-size: 40px !important;
  }

  #index .intro {
    height: 240px !important;
  }

  .logo {
    height: 280px !important;
  }

  .bb{
    background-size: calc(100vw - 80px) !important;
    height: 80px !important;
  }

}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .descriptions .content ul {
    margin-left: 20px !important;
  }
}


</style>
