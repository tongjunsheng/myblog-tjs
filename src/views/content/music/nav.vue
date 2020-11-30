<template>
  <div class="nav" @click="navClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "nav",
    props:{
      path : String
    },
    data(){
      return{

      }
    },
    methods:{
      navClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>

</style>