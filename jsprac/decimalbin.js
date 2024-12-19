let num=10
let s = ''
let a = num%2  //0
s = a+s
num=parseInt(num/2)      //5
let b = num%2  //1
s = b+s
num=parseInt(num/2)      //2
let c = num%2  //0
s = c+s
num=parseInt(num/2 )     //1
let d = num%2  //1
s = d+s
console.log(s) //1010
