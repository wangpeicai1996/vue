<template>
  <div>
    <h2>我是用户</h2>
    <p>我是用户页面内容</p>
    <!-- <h2>{{$route.params.userid}}</h2> -->
    <h2>{{userId}}</h2>
  </div>
</template>

<script>

  export default {
    name:'User',
    computed: {
      userId(){
        //获取路由的参数,this.$route对象是当前处于活跃的路由对象，userId与前面动态路由中定义的/user/:userid对应
        return this.$route.params.userid
      }
    }
  }

</script>
<style  scoped>

</style>