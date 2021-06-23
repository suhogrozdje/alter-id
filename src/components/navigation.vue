<template>
  <div id="navigation">
    <div class="content">
      <router-link to="/author" class="menu-button">
        About the author
      </router-link>
      <router-link to="/" class="menu-button">
        Buffed bear
      </router-link>
    </div>
  </div>
</template>

<script>
export default{

}
</script>

<style scoped>
#navigation{
  width: 100%;
  height: 50px;
  background: #11182b;
}

.menu-button{
  border-bottom: 0;
  display: block;
  text-transform: uppercase;
  font-size: 13px;
  height: 50px;
  padding: 0 20px;
  line-height: 53px;
  float: right;
  color: #a2a7b5;
  text-decoration: none;
}
.menu-button:hover{
  background: #070b17;
  color: #b3b9cb;
  border-bottom: 3px solid #194772;
}
</style>
