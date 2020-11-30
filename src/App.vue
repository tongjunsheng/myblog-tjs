<template>
  <div id="nav">
    <rain></rain>
    <index></index>
  </div>
</template>
<script>
  import index from './components/index'
  import rain from "./views/banner/rain/rain";
  export default {
    name: 'App',
    components: {
      index,
      rain
    }
  }
</script>

<style>

/**{*/
/*  padding: 0;*/
/*  margin: 0;*/
/*}*/
</style>
