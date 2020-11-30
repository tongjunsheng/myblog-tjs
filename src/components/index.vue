<template>
  <div id="backImg">
    <leftbanner></leftbanner>
    <transition :name="transitionName">
      <router-view class="colunm"></router-view>
    </transition>
  </div>
</template>

<script>
 import leftbanner from "../views/banner/leftbanner/leftbanner";
  export default {
    name: "index",
    data(){
      return{
        transitionName:''
      }
    },
    watch: {//使用watch 监听$router的变化
      $route(to, from) {
        // console.log(to.meta.index);
        // //如果to索引大于from索引,判断为前进状态,反之则为后退状态
        if(to.meta.index > from.meta.index){
          //设置动画名称
          this.transitionName = 'slide-left';
        }else{
          this.transitionName = 'slide-right';
        }
      }
    },
    components:{
      leftbanner,
    }
  }
</script>
<style>
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 500ms;
    position: absolute;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .colunm{
    width: auto;
    height: auto;
    border-radius: 15px;
  }
  #backImg{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
  *{
    padding: 0;
    margin: 0;
  }
  body{
    width: 100%;
    height: 100%;
    background-image: url("../../public/img/staticimg/backImg1.jpg");
    background-size: 100% 100%;
    background-attachment: fixed;
  }



</style>