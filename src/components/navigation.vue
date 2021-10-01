<template>
  <div id="navigation">
    <div class="content">
      <a href="#" v-scroll-to="{el: '#app'}" class="menu-button left">
        Alter_ID
      </a>
      <a href="#" v-scroll-to="{el: '#selection', offset: -80}" class="menu-button right">
        Meet yours
      </a>
      <a href="#" v-scroll-to="{el: '#modes'}" class="menu-button right">
        How it works
      </a>
      <a href="#" v-scroll-to="{el: '#featurette'}" class="menu-button right">
        App
      </a>
    </div>
  </div>
</template>

<script>
export default{

}
</script>

<style lang="scss">
@import "../assets/css/_colors";
#navigation{
  width: 100%;
  height: 80px;
  backdrop-filter: blur(7px);
  //box-shadow: 0 2px 2px rgba(0,0,0, 0.02);
  z-index: 2;
  background: transparentize($aid-beige, 0.3);
  position: fixed;
  //border-bottom: 3px solid lighten($aid-beige, 2%);

  .content{
    overflow: visible;
  }
}

.menu-button{
  border-bottom: 0;
  display: block;
  font-size: 20px;
  height: 80px;
  padding: 0 20px 0;
  line-height: 83px;
  color: $aid-gray;
  text-decoration: none;

  &.left{
    float: left;
    margin-left: -20px;

    &:hover{
      background: none;
      color: darken($aid-gray, 15%);
      border-bottom: 0;
    }
  }
  &.right{
    float: right;

    &:nth-child(2) {
      //margin-right: -20px;
    }
  }
}
.menu-button:hover{
  color: $aid-gray;
  background: transparentize(lighten($aid-beige,3%), 0.4);
  //border-bottom: 1px solid transparentize(darken($aid-beige,20%), 0.2);
  //
}
</style>
