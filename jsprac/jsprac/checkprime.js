let num=4
let i=1
let c=0
if(num!=2 && num%2==0)
{
    console.log('not prime')
}
else
{
while(i<=num)
{
  if(num%i==0)
  {
    c++;
  }
  i++;
}
if(c==2)
{
    console.log('prime')
}
else
{
    console.log('not prime')
}
}
