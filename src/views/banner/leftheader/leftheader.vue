<template>
  <div class="leftheader">
    <div class="header">
      <img :src="img" alt="">
      <div class="user">
        <text>{{user}}</text>
      </div>
    </div>
    <div class="column">
      <span class="mingyan"></span>

    </div>
  </div>
</template>

<script>
  export default {
    name: "leftheader",
    data(){
      return{
        img : '/img/staticimg/header.jpg',
        user : '初夏有茶香',
        column:[
            '',
            ''
        ]
      }
    }
  }
</script>

<style scoped>
  .mingyan{
    font-size: 13px;
  }
.leftheader{
  width: 250px;
  height: 115px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #f0f0f0;
  /*background-color: red;*/
}
.header{
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
}
.header img{
    width: 60px;
    height: 60px;
    border-radius: 40px;
}

.user:hover{
  cursor:pointer
}

</style>