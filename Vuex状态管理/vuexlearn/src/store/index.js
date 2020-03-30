import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT,DECREMENT} from './mutations-types'

Vue.use(Vuex)

 const store = new Vuex.Store({
   //在state中定义需要共享的状态变量
  state: {
    count: 1000,
    student:[
      {name: "张三", age: 19},
      {name: "李四", age: 20},
      {name: "王五", age: 25}
    ],
    info:{
      address:"北京",
      county:"china",
      num:"010"
    }
  },
  //store中的变量状态修改唯一途径就是通过$sotre.commit('xxx')提交到mutations
  mutations: {
    //默认参数会传入state
    [INCREMENT](state){
      state.count++
    },
    //定义常量命名，避免出错
    [DECREMENT](state){
      state.count--
    },
    //接收其他参数
    addCount(state,num){
      state.count += num
    },
    addCountObj(state,obj){
      state.count += obj.num
      console.log(obj.age);
    },
    updateInfo(state,value){
      //如果属性未在state中定义并初始化，则无法对此属性做到响应式改变，但是可以使用Vue.set()做到响应式改变
      //向对象中增加属性
      Vue.set(state.info,"people",value)
      //普通方式删除对象中的属性也做不到响应式
      //delete state.info.num
      Vue.delete(state.info,"num")
    }
  },
  actions: {
  },
  modules: {
  },
  //类似于计算属性,相当于共享数据中的变化部分计算
  getters:{
    powerCouter(state){
      return state.count * 10 
    },
    more20(state) {
      return state.student.filter(s => {
        return s.age > 20
      })
    },
    //第二个参数可传
    studentNum(state,gtters){
      return gtters.more20.length
    },
    //返回一个函数，在使用者调用的时候可以传入age参数
    moreAge(state){
      return function(age){
        return state.student.filter(s => s.age > age)
      }
    }
  }
})

export default store