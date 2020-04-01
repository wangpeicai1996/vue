<template>
  <div id="app">
    <h2>app内容</h2>
    <button @click="sub">-</button>
    <!--通过store对象获取state中的属性-->
    <h2>{{$store.state.count}}</h2>
    <button @click="add">+</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCountObj(10)">+10</button>
    <HelloVuex></HelloVuex>
    <h2>$store.getter方式获取变量值</h2>
    <h2>{{$store.getters.powerCouter}}</h2>
    <h2>{{$store.getters.more20}}</h2>
    <h2>{{$store.getters.studentNum}}</h2>
    <h3>动态参数传入10</h3>
    <h2>{{$store.getters.moreAge(10)}}</h2>
    <!--state中的对象实现响应式-->
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo('111')">修改信息</button>
    <button @click="aupdateInfo('重庆')">异步修改</button>
    <!--modules中的state-->
    <h2>modules中的属性</h2>
    <h2>{{$store.state.modulesA.name}}</h2>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <button @click="updateNameAsyn()">模块中的异步方法</button>
    <button @click="updateName('lisi')">通过modules中的mutations修改</button>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
//mutations常量类型定义，避免书写出错
import {INCREMENT,DECREMENT} from './store/mutations-types'

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
      this.$store.commit(INCREMENT)
    },
    sub(){
      this.$store.commit(DECREMENT)
    },
    addCount(num){
      this.$store.commit('addCount',num)
    },
    //第二种提交风格，按照对象提交
    addCountObj(num){
      this.$store.commit({
        type: "addCountObj",
        num,
        age: 18
      })
    },
    updateInfo(value){
        this.$store.commit("updateInfo",value)
    },
    //提交到actions中的方法
    aupdateInfo(city){
      //异步调用，并执行回调函数，获得返回值res
      this.$store.dispatch('aupdateInfo',city)
      .then(res =>{
        console.log("回调函数返回的信息"+res);
      })
    },
    updateName(name){
      this.$store.commit('updateName',name)
    },
    updateNameAsyn(){
      this.$store.dispatch('updateNameAsyn')
    }
  },
  components:{
    HelloVuex
  }
}
</script>

<style>


</style>
