<template>
  <div class="meirituijian">
    	<span class="lb-ico" >
<!--		  // 这里用isPlay 来控制切换灰色喇叭图标和绿色喇叭图标-->
		        <img :src="isPlay?
		        'https://static.xfanread.com/readingDay2020/quickspot/bf@2x.png'
		        : 'https://static.xfanread.com/readingDay2020/quickspot/jy@2x.png'"
            />
		        <audio ref="audio"
                   :src="resData.questionAudio"
                   @ended="audioEnd"></audio>
<!--		        // 这里用到了audio的结束事件,原生是onended, vue中使用不加on-->
      </span>
<!--    -->
    <div class="musices">
      <div><text>音乐标题</text></div>
      <div><text>歌手</text></div>
      <div><text>时长</text></div>
    </div>
    <div class="musices1" @click="handlePlayAudio">
      <div><text>再怎么爱</text></div>
      <div><text>尚士达</text></div>
      <div><text>4:40</text></div>
    </div>
  </div>
</template>

<script>

  import axios from "axios";

  export default {
    name: "meirituijian",
    data(){
      return{
        isPlay: false, // 是否播放
        resData: {
          questionAudio:'http://eg.sycdn.kuwo.cn/b56ff7e3f07d7d20c8644d588eefc07b/5fab5ff1/resource/n2/8/80/4106220474.mp3'
        },
      }
    },
    methods:{
      // 点击喇叭图标, 开始播放音频
      handlePlayAudio() {
        // console.log(111)
        this.$refs.audio.play()
        // 这里使用了audio的原生开始播放事件,同样不加on, 并使用ref获取dom
        this.isPlay = true
      },
      // 音频停止后, 把喇叭置灰
      audioEnd() {
        // console.log(1111)
        this.isPlay = false
      },

    }
  }
</script>

<style scoped>
.meirituijian{
  width: 920px;
  height: auto;
}
  .musices{
    width: 920px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #e0e0e0;
    align-items: center;
    font-size: 15px;
    color: white;
  }
.musices1{
  width: 920px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #e0e0e0;
  align-items: center;
  font-size: 15px;
  color: #ffffff;
}
</style>