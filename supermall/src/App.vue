<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar'

export default {
  name: 'app',
  componets:{
    MainTabBar
  }
}
</script>

<style> 
 @import 'assets/css/base.css';
</style>
