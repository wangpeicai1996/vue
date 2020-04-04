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

//axios请求，默认是get请求
axios({
  url:'http://123.207.32.32:8000/home/multidata',
  //可指定请求方式，params设置请求参数，不用?拼接在url后面
  /*method:'post',
  params:{
    xxx:'',
    xxx:''
  }*/
}).then(res =>{
  console.log(res);
})


//发送并发请求，同时发送多个请求
/*axios.all([axios({}),axios({})]).then(results=>{
  console.log(results[0]);
  console.log(results[0]);
})*/