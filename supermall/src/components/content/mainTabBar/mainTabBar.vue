<template>
  <tab-bar>
      <tab-bar-item path='/home' activeColor='red'>
         <img slot='item-icon' src='~assets/img/tabbar/home.svg'/>
         <img slot='item-icon-active' src='~assets/img/tabbar/home_active.svg'/>
        <div slot='item-text'>首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category' activeColor='red'>
        <img slot='item-icon' src='~assets/img/tabbar/category.svg'/>
        <img slot='item-icon-active' src='~assets/img/tabbar/category_active.png'/>
        <div slot='item-text'>分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart' activeColor='red'>
        <img slot='item-icon' src='~assets/img/tabbar/shopcart.svg'/>
        <img slot='item-icon-active' src='~assets/img/tabbar/shopcart_active.svg'/>
        <div slot='item-text'>购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile' activeColor='red'>
             <img slot='item-icon' src='~assets/img/tabbar/我的.png'/>
             <img slot='item-icon-active' src='~assets/img/tabbar/我的_活跃.png'/>
        <div slot='item-text'>我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem'
  export default {
    name:'mainTabBar',
    components:{
      TabBar,
      TabBarItem
    }
  }

</script>
<style  scoped>

</style>