
var name='小明'

function sum(num1,num2){
  console.log(num1 + num2)
}


//导出方式1
export {
  name,sum
}

export var age = 18
export function fun(){
  console.log("导出的方法")
}