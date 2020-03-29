<template>
  <div id="app">
    <h2>app内容</h2>
    <button @click="sub">-</button>
    <!--通过store对象获取state中的属性-->
    <h2>{{$store.state.count}}</h2>
    <button @click="add">+</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <HelloVuex></HelloVuex>
    <h2>$store.getter方式获取变量值</h2>
    <h2>{{$store.getters.powerCouter}}</h2>
    <h2>{{$store.getters.more20}}</h2>
    <h2>{{$store.getters.studentNum}}</h2>
    <h3>动态参数传入10</h3>
    <h2>{{$store.getters.moreAge(10)}}</h2>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
export default {
  name: 'app',
  data(){
    return {
      counter: 0 
    }
  },
  methods:{
    add(){
      //通过this.$store对象访问共享存储中的方法
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrement')
    },
    addCount(num){
      this.$store.commit('addCount',num)
    }
  },
  components:{
    HelloVuex
  }
}
</script>

<style>


</style>
