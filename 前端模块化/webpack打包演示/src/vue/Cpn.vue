<template>
  <div>
    <h2>我是cpn标题</h2>
    <p>我是cpn组件内容</p>
    <h2>{{name}}</h2>
  </div>
</template>

<script>

  export default {
    name:'cpn',
    props:[''],
    data () {
      return {
        name:'我是名字'
      };
    }
  }

</script>
<style  scoped>

</style>