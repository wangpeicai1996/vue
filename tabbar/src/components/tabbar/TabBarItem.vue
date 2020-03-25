<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name='item-icon'></slot></div>
      <div v-else><slot name='item-icon-active'></slot></div>
      <div :style="activeStyle"><slot name='item-text'></slot></div>
    </div>
</template>

<script>

  export default {
    name:'TabBarItem',
    props:{
      path:{
        type:String
      },
      activeColor:{
        type: String,
        default: 'green'
      }
    },
   computed:{
     isActive(){
       //this.$route.path  当前处于活跃的path与当前的这个item的path是否一致
       //比如：/home -> /home  true  /home -> /cart false
       return this.$route.path.indexOf(this.path) !== -1
     },
     activeStyle(){
       return this.isActive ? {color:this.activeColor} : {}
     }
   },
    methods:{
      itemClick(){
          this.$router.push(this.path).catch((error)=>{error})
      }
    }
  }

</script>
<style  scoped>

 .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  } 
</style>