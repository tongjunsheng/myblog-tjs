<template>
  <div class="summer">
    <div class="markdownTitleAll" @click="navigatorColum">
      <img :src="img" alt="">
      <div class="markdownTitle">
        <a href="#">{{title}}</a>
        <text>&nbsp&nbsp{{text}}</text>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "summer",
    data() {
      return {
        img: '/img/myPicture/mypicture1.jpg',
        title : '原来你也在这里',
        text : '首页主体内容共展示3个模块，分别为电影，电视剧，综艺。每个模块可左右滑动查\n' +
            '          看最多7条数据，如果需要查看更多，点击模块右上方更多按钮即可。'
      }
    },
    methods:{
      navigatorColum(){
        this.$router.replace('/columPicture')
      }
    }
  }
</script>

<style scoped>

  a {
    color: white;
    text-decoration: none;
    font-size: 40px;
  }

  .summer {
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
    background: rgba(0, 0, 0, .5);
  }

  .markdownTitle {
    width: 500px;
    height: auto;
    color: white;
    display: flex;
    flex-direction: column;
  }
  .markdownTitle text{
    font-size: 15px;
    margin-top: 15px;
  }
  .markdownTitleAll {
    width: 800px;
    height: 170px;
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    margin-bottom: 25px;
    justify-content: inherit;
    box-shadow: 0px 0px 0px ;
    justify-content: inherit;
    border-radius: 15px;
    align-items: center;
  }
  .markdownTitleAll:hover{
    width: 800px;
    height: 170px;
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    margin-bottom: 25px;
    justify-content: inherit;
    transition: box-shadow .5s;
    box-shadow: 0px 0px 50px #f0f0f0;
  }

  .markdownTitleAll img {
    width: 200px;
    height: 150px;
    border-radius: 15px;
  }

</style>