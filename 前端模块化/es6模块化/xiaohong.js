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