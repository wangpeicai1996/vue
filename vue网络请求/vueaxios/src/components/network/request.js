import axios from 'axios'
//第一种封装方式，要求调用者传入三个参数，基础配置项，成功回调函数，失败回调函数
export function request(config,success,failure){
  //创建axios实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

instance(config)
  .then(res=>{
    //回调传入的成功函数，将返回的结果传入回调函数
    success(res)
  }).catch(err=>{
    //回调失败函数
    failure(err)
  })
}


//第二种封装方式
export function request2(config){
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  instance(config.baseConfig)
    .then(res=>{
      config.success(res)
    }).catch(err=>{
      config.failure(err)
    })
}

//第三种方式：终极
export function request3(config){
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  //axios拦截器，全局拦截直接用axios.interceptors
  //1.请求拦截
  instance.interceptors.request.use(config=>{
    console.log("获得请求的参数配置");
    console.log(config);
    //必须将配置对象返回出去，否则instance实例在真正请求的时候获取不到config对象
    return config    
  },err=>{
    console.log(err);
  })
  //2.响应拦截
  instance.interceptors.response.use(res=>{
    console.log("响应拦截");
    console.log(res);
    //将响应的东西返回给调用函数处理
    return res.data
  },err=>{
    console.log(err);
  })



  //直接返回实例，因为axios.create()本身返回一个promise对象，所以此处直接返回promise对象，调用这个可以直接使用.then和.catch
  //如果需要换框架，在此方法中直接返回一个new Promise()对象即可
  return instance(config)
}

