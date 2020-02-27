
var name='小明'

function sum(num1,num2){
  console.log(num1 + num2)
}


//导出方式1
export {
  name,sum
}

//导出方式2
export var age = 18
export function fun(){
  console.log("导出的方法")
}

//export default导出一个默认的东西，在被导入的时候可以被任意命名，但是只能导出一个

const address = "北京市"
export default{
  address 
}