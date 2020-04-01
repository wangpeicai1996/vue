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
  //mutations中修改所有的状态值，state中的数据
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
    },
    aupdateInfo(state,city){
      Vue.set(state.info,"address",city)
    }
  },
  //异步方法获取数据时，在actions中定义方法，再利用mutations修改状态值
  actions: {
    //默认参数context
    /*aupdateInfo(context,city){
      //模拟的异步操作，由actions中的方法提交到mutations
      setTimeout(()=>{
        context.commit("aupdateInfo",city)
      },1000)
    }*/

    //异步操作之后，回调函数通知上层方法，context参数是store对象
    aupdateInfo(context,city){
      //利用promise函数返回通知信息
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          context.commit("aupdateInfo",city)
          //调用resolve()，并且可以返回参数
          resolve('回调消息')
        },1000)
      })
    }
  },
  //modules相当于对state的拓展，在需要定义多个state的时候可以在此定义,可以定义一整套，取值调用和普通的一样
  modules: {
      modulesA:{
        state:{
          name:'zhangsan'
        },
        mutations:{
          updateName(state,name){
            state.name = name
          }
        },
        getters:{
          fullName(state){
            return state.name + "11"
          },
          //在子模块中的getters方法中可以有第三个参数rootState获取根state,从而获取根state中的值
          fullName2(state,getters,rootState){
            return getters.fullName + rootState.student[0].name
          }
        },
        actions:{
          //此context指的是当前modules中的store对象，只能对当前模块中的mutations中的内容操作
          updateNameAsyn(context){
              context.commit('updateName','wangwu')
          }
        },
        modules:{}

      } 
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