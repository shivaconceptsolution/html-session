let s=''
let num=2
while(num!=0)
{
    a=num%2
    s=a+s
    num=parseInt(num/2);
}
console.log(s)
