<template>
  <div class="picture">
    <div class="mypicture" v-for="item in Imgurl">
      <img :src="item" alt="" class="img">
    </div>
  </div>
</template>

<script>
  export default {
    name: "picture",
    data(){
      return{
        Imgurl : [
          '/img/myPicture/mypicture1.jpg',
          '/img/myPicture/mypicture2.jpg',
          '/img/myPicture/mypicture3.jpg',
          '/img/myPicture/mypicture4.jpg',
          '/img/myPicture/mypicture5.jpg',
          '/img/myPicture/mypicture6.jpg',
          '/img/myPicture/mypicture7.jpg',
          '/img/myPicture/mypicture8.jpg',
          '/img/myPicture/mypicture9.jpg',
          '/img/myPicture/mypicture10.jpg',
        ]
      }
    }
  }
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.picture {
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
.mypicture{
  width: 250px;
  height: 170px;
  background: #fff;
  margin-top: 50px;
}

.img{
  width: 250px;
  height: 170px;
  opacity:0.6;
}
.img:hover{
  width: 250px;
  height: 170px;
  opacity: 1;
  transition: opacity 0.3s;
}


</style>