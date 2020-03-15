//配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
//路由懒加载箭头函数写法1
const About = () => import ('../components/About')
const Home = ()=>import ('../components/Home')
const news = () => import ('../components/HomeNews')
const message = () => import ('../components/HomeMessage')
const Profile = () => import ('../components/Profile') 

//1.Vue.use(插件)，安装插件
Vue.use(VueRouter)

//2.创建router对象
const routes = [
    //一个映射关系就是一个对象
    {
      path:'/',
      //默认显示页面，通过重定向到首页
      redirect: '/home'
    },
    {
      path:'/home',
      //component: Home
      component: Home,
      //子组件子路由
      children: [
        {
          path:'',
          redirect: 'news'
        },
        {
          //子组件此处不许要加'/'
          path: 'news',
          component: news
        },
        {
          path: 'message',
          component: message
        }
      ]
    },{
      path:'/about',
      component: About
    },
    {
      //动态路由绑定,传递参数:userid
      path: '/user/:userid',
      //路由懒加载写法2
      component: () => import ('../components/User')
    },
    {
      path:'/profile',
      component: Profile
    }
]
const router = new VueRouter({
  //配置理由器和组件之间的应用关系,此处的options是routes，不要写错了
  routes:routes,
  //mode属性，指定url改变的方式为history模式，默认是hash模式
  mode:'history',
  //统一设置渲染router-link的class样式
  linkActiveClass: 'myclass'
})

//3.将router对象传入vue实例中
export default router
//在main.js中引入此文件，在Vue对象中引入router对象