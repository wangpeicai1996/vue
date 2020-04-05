module.exports = {
  configurewebpack:{
    //配置文件夹路径别名
    resolve:{
      alias:{
        '@':'src',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  }
}