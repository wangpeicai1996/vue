<!--要想vue文件被识别编译，必须安装vue-loader和vue-templaet-compiler插件loader,开发时编译使用
npm install vue-loader vue-template-compiler --save-dev
-->
<template>
    <div>
      <h2 class='title'>{{message}}</h2>
      <button @click='btnClick'>按钮</button>
      <h2>{{name}}</h2>
      <cpn></cpn>
    </div>
</template>
<script>
//可导入其他的vue文件
import cpn from './Cpn'

  export default {
    name: "app",
    data(){
        return {
          message:'你好',
          name:'王培材111'
        }
      },
      methods:{
        btnClick(){
          alert('按钮弹窗')
        }
      },
      components:{
        cpn
      }
  }
</script>
<style scoped>
  .title{
      color:green;
  } 
</style>