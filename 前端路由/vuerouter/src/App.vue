<template>
  <div id="app">
    <!--tag属性，指定渲染类型,replace属性是避免两个页面切换之后，可以通过浏览器的前进后退来切换页面
    active-class指定渲染的class样式，默认会有一个router-link-active样式渲染上去，也可以在路由中统一设置class-->
    <!-- <router-link to='/home' tag='button' replace active-class='myclass'>首页</router-link>
    <router-link to='/about' tag='button' replace active-class='myclass'>关于</router-link> -->
    <router-link to='/home' tag='button' replace>首页</router-link>
    <router-link to='/about' tag='button' replace>关于</router-link>

    <!--动态路由绑定-->
    <router-link :to="'/user/' + userid" tag='button' replace>用户</router-link>
    <!-- <router-link to="/profile" tag='button'>档案</router-link> -->
    <!--query方式向后传递参数，绑定对象{},传递query对象，url会通过?传值?name=lisi&age=18-->
    <!-- <router-link :to="{path:'/profile',query:{name:'lisi',age:18}}" tag='button'>档案</router-link> -->

<!--通过在事件方法中，用代码跳转页面，传递参数-->
  <!-- <button @click="homeClick">首页</button>
  <button @click="aboutClick">关于</button>
  <button @click="userClick">用户</button> -->
  <button @click='profileClick'>档案</button>

  <keep-alive>
    <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name:'App',
  data(){
    return {
      userid:'zhangsan'
    }
  },
  methods: {
    homeClick(){
      //通过代码的方式改变路由路径,通过this.$router获取导入的index.js中的router对象，调用push或者replace，设置路由路径
      //this.$router.push('/home')
      this.$router.replace('/home')
    },
    aboutClick(){
      //this.$router.push('/about')
      this.$router.replace('/about')
    },
    userClick(){
      this.$router.push('/user')
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name: 'ccc',
          age: 20,
          height: 199
        }
      })
    }
  }
}
</script>
<style>
.myclass{
  color: red
}

</style>
