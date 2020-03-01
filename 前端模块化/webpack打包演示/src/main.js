import {sum} from './js/test.js'
//引入css等其他非js文件 
require('./css/normal.css')
require('./css/special.less')
var result = sum(1,2)
console.log(result)

document.writeln('<h2>webpack</h2>')