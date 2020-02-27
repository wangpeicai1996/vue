import {name,sum,age,fun1} from './xiaoming.js'
var name='小红'

function sub(num1,num2){
  var result = 0;
  if (num1 > num2) {
    result = num1 - num2
  } else {
    result = num2 - num1
  }
  console.log(result)
}
console.log(name)
console.log(age)
console.log(sum(10,20))
console.log(fun1)

import addr from './xiaoming.js'

console.log('export default导出的默认'+addr)

//终极导入方式,将xiaomin.js中的内容全部导出给上别名
import * as xiaoming from './xiaoming.js'

//用别名调用
console.log(xiaoming.flag)
console.log(xiaoming.sum(1,2))