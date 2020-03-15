<template>
  <div>
    <h2>我是profile</h2>
    <p>我是档案内容</p>
    <!--通过route对象获取query对象拿到前面传递数据-->
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
    <p></p>
  </div>
</template>

<script>

  export default {
    name:'profile',
    props:[''],
    data () {
      return {

      };
    },

    components: {},

  }

</script>
<style  scoped>

</style>