<template>
  <div class="music-kuangjia">
    <music></music>
    <router-view></router-view>
  </div>
</template>

<script>
  import music from "./music";
  export default {
    name: "navkuangjia",
    components:{
      music
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .music-kuangjia {
    width: 920px;
    height: auto;
    box-shadow: 2px 0px 50px #fff;
    position: relative;
    left: 300px;
    top: 0;
    /*background: rgba(204, 204, 204, .5);*/
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: rgba(0 ,0 ,0 ,.5);
  }

</style>