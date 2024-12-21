let num=18
let result = ' '
let result1 = ' '
if(num%3==0)
{

    result+='divisible by 3 '
}
else
{
     result1+= ' not divisible by 3 '
}
if(num%5==0)
{
        result +='divisible by 5 '
}
else
{
     result1+='not divisible by 5 '
}
if(num%9==0)
{
        result +='divisible by 9 '
}
else
{
    result1+='not divisible by 9'
}
console.log(result)