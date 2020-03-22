<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path='/home'>
         <img slot='item-icon' src='./assets/img/tabbar/首页.png'/>
         <img slot='item-icon-active' src='./assets/img/tabbar/首页_活跃.png'/>
        <div slot='item-text'>首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img slot='item-icon' src='./assets/img/tabbar/分类.png'/>
        <img slot='item-icon-active' src='./assets/img/tabbar/分类_活跃.png'/>
        <div slot='item-text'>分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <img slot='item-icon' src='./assets/img/tabbar/购物车.png'/>
        <img slot='item-icon-active' src='./assets/img/tabbar/购物车_活跃.png'/>
        <div slot='item-text'>购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
             <img slot='item-icon' src='./assets/img/tabbar/我的.png'/>
             <img slot='item-icon-active' src='./assets/img/tabbar/我的_活跃.png'/>
        <div slot='item-text'>我的</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'
export default {
  name: 'app',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  /**引用样式文件 */
  @import './assets/css/base.css';
</style>
