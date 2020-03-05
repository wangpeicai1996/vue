import {sum} from './js/test.js'
//引入css等其他非js文件 
require('./css/normal.css')
require('./css/special.less')
var result = sum(1,2)
console.log(result)

document.writeln('<h2>webpack</h2>')


//使用vue开发
//1.导入vue
import Vue from 'vue'

//将template组件化，然后在下面的vue实例中注册组件并且使用,vue实例中的template会替换掉html中的<div id='app'></div>内容
//import app from './vue/app.js'
import app from './vue/app.vue'


new Vue({
  el:'#app',
  //template属性内容会直接将<div id='app'></div>替换掉
  template:`<app/>`,
  components:{
    app
  }
  
})