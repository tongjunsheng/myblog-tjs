<template>
  <div class="leftbanner">
    <leftheader></leftheader>
    <ledtbannercenter path="/picture"><div class="navigation"><text>初春见白鹭</text></div></ledtbannercenter>
    <ledtbannercenter path="/summer"><div class="navigation">初夏有茶香</div></ledtbannercenter>
    <ledtbannercenter path="/navkuangjia"><div class="navigation">初秋花落叶</div></ledtbannercenter>
    <ledtbannercenter path=""><div class="navigation">初冬又一年</div></ledtbannercenter>
  </div>
</template>

<script>
  import leftheader from "../leftheader/leftheader";
  import ledtbannercenter from "../leftbannercenter/ledtbannercenter";
  export default {
    name: "leftbanner",
    data(){
      return{
      }
    },
    methods:{

    },
    components:{
      leftheader,
      ledtbannercenter,
    }
  }
</script>

<style scoped>

  .leftbanner{
    width: 290px;
    height: 600px;
    background-color: rgba(204,204,204,0.5);
    position: fixed;
    top: 75px;
    left: -275px;
    transition:  0.5s;
    -webkit-transition: left  0.5s;
    border-bottom-right-radius:15px;
    border-top-right-radius:15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;

  }
  .leftbanner:hover{
    width: 290px;
    height: 600px;
    background-color: rgba(204,204,204,.2);
    box-shadow: 2px -2px 3px #fff;
    position: fixed;
    top: 75px;
    left: 0px;
    border-bottom-right-radius:15px;
    border-top-right-radius:15px;
  }
  *{
    margin: 0;
    padding: 0;
  }

  .banner{
    display: flex;
    position: relative;
    font-size: 15px;
  }

  .navigation {
    list-style: none;
    width: 90px;
    height: 28px;
    line-height: 30px;
    text-align: center;
    margin-top: 25px;
    border: 1px solid #f0f0f0;
    border-radius: 30px;
    font-size: 13px;
  }
  .navigation:hover{
    cursor:pointer;
    transition: border .3s ;
    border: 1px solid #ffffff;
    color: #ffffff;
  }
</style>