<template>
  <div>
    <h2>helloVuex内容</h2>
    <h2>{{$store.state.count}}</h2>
  </div>
</template>

<script>

  export default {
    name:'HelloVuex',
    props:{
      count:Number
    },  
    data () {
      return {

      };
    },
    components: {},

  }

</script>
<style  scoped>

</style>