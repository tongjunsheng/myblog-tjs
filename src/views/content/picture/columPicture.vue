<template>
  <div class="summer">

  </div>
</template>

<script>
  export default {
    name: "summer",
    data() {
      return {

      }
    },
    methods:{

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