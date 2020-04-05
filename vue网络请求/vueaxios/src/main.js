import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')


//axios的全局默认设置项
axios.defaults.baseURL='http://123.207.32.32:8000'
axios.defaults.timeout=5000

//axios请求，默认是get请求
/*axios({
  url:'/home/multidata',
  //可指定请求方式，params设置get请求参数,post请求参数放在data中，不用?拼接在url后面
  method:'get',
  params:{
    xxx:'',
    xxx:''
  }
}).then(res =>{
  console.log(res);
})*/


//发送并发请求，同时发送多个请求
/*axios.all([axios({}),axios({})]).then(results=>{
  console.log(results[0]);
  console.log(results[0]);
})*/

//利用自己封装的组件调用请求
import {request, request2,request3} from './components/network/request'
//第一种方式
request({
  url:'/home/multidata'
},res=>{
  //成功回调函数
  console.log("第一种方式");
  console.log(res);
},err=>{
  //错误回调函数
  console.log(err);
})
//第二种方式
request2({
  baseConfig:{
    url:'/home/multidata'
  },
  success(res){
    console.log("第二种方式");
    console.log(res);
  },
  failure(err){
    console.log(err);
  }
})

//第三种方式
request3(
  {url:'/home/multidata'}
  ).then(res=>{
    console.log("第三种方式");
    console.log(res);
  }).catch(err=>{
    console.log(err);
  })