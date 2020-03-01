//webpack导出的配置文件，commonjs规范写法

//引入node提供的包path，用于动态获取路径，但是在引入之前要在项目根目录下先执行npm init
//会在当前目录下生成一个package.json文件，然后再执行npm install，会再生成package-lock.json
//可以在package.json文件中的scripts标签下，绑定npm run xxx 命令的映射，如 "build" : "webpack"，只需要运行npm run build就相当于执行了webpack命令
const path = require('path')

module.exports = {
  //导出的入口
  entry: './src/main.js',
  //导出的出口
  output: {
    //指定的导出路径必须是绝对路径
    //动态获取路径,__dirname获取当前文件路径，将dist拼接在后面
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    //定义发布打包路径，任何资源的引用前都会拼接上此路径，避免找不到
    publicPath:'dist/'
  },
  //使用loader将非js文件也当做模块打包
  //1.首先安装xxx-loader,npm install --save-dev css-loader
  //2.webpack官网提供了很多loader,直接复制过来定义在module对象中即可
  //3.注意：读取loader时，从右向左读取，loader读取顺序有可能引起项目报错
  module:{
    rules:[
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当图片小于限制大小的时候（通产默认值为8196 8kb），loader会将图片转换为base64格式字符串
              //如果图片大于限制的话，就会使用file-loader加载器，只需要安装file-loader即可，不需要配置
              limit: 20000,
              //设置打包的文件的名字格式，放在img文件夹下，以文件原有名字+8位hash值+拓展名
              //[]表示变量值
              name: 'img/[name]-[hash:8].[ext]'
            },
            
          }
        ]
      }
    ]
  }
}

//本地安装webpack：
/**在项目根目录下，执行npm install webpack@xxx --save-dev指定安装版本,--save-dev表示此安装只是开发时依赖，
 * 安装好之后，会在package.json文件中多出devDependencies标签，显示安装的webpack版本，
 * 在用webpack进行打包是，如果直接在终端运行此命令，会使用全局的webpack进行打包，但是如果在package.json中定义了命令映射的话，
 * 在终端运行映射的命令时，会优先使用本地webpack，或者得在运行./node_modules/.bin/webpack
 */