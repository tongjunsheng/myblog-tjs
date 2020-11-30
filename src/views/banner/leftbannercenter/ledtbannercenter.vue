<template>
  <div class="banner" @click="bannerClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "ledtbannercenter",
    props:{
      path:String
    },
    data(){
      return{

      }
    },
    methods:{
      bannerClick(){
        this.$router.replace(this.path)
      }
    }
  }

</script>

<style scoped>



</style>