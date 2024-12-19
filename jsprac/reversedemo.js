let num=78923
let a=num%10  //5
num=parseInt(num/10) //1234.5
let b=num%10 //4
num=parseInt(num/10) //123.4
let c=num%10 //3
num=parseInt(num/10) //12.3
let d=num%10  //2
let e=parseInt(num/10)
let res = a*10000+b*1000+c*100+d*10+e*1
console.log(res)

