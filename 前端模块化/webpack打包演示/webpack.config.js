//webpack导出的配置文件，commonjs规范写法

//引入node提供的包path，用于动态获取路径，但是在引入之前要在项目根目录下先执行npm init
const path = require('path')
module.export = {
  //导出的入口
  entry: './src/main.js',
  //导出的出口
  output: {
    //指定的导出路径必须是绝对路径
    //动态获取路径
    path: './dist',
    filename: 'bundle.js'
  }
}