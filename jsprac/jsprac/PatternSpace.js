for(let i=1;i<=5;i++)
{
     let s=''
    for(let k=1;k<i;k++)
    {
       s += " "
    }
    for(let j=1;j<=6-i;j++)
    {
       s += j;
    }
    console.log(s)
}