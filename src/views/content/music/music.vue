<template>
  <div class="music">
    <div class="nav-kuangjia">
      <div class="nav">
        <router-link class="nav1" :to="{name : 'meirituijian'} "><div >每日推荐</div></router-link>
        <router-link class="nav1" :to="{name : 'shipin'}"><div >视频</div></router-link>
        <router-link class="nav1" :to="{name : 'woxihuan'}"><div >我喜欢</div></router-link>
        <router-link class="nav1" :to="{name : 'geci'}"><div >歌词</div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import nav from "./nav";
  export default {
    name: "music",
    data(){
      return{

      }
    },
    components:{
      nav
    }
  }
</script>

<style scoped>

  .nav-kuangjia{
    width: 920px;
    height: 80px;
    margin-top: 50px;
  }
  .nav{
    width: 100%;
    height: auto;
    display: flex;
  }
  .nav1{
    flex: 1;
    color: #fff;
    text-align: center;
    width: auto;
    height: auto;
    cursor: pointer ;
    font-size: 20px;
    text-decoration: none;
  }
  .nav1:hover{
    color: #FF0033;
    transition: color 1s;
  }
  .nav2{
    width: 100px;
    height: 100px;
    background: #fff;
  }
</style>