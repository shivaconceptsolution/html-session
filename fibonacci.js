let first=-1
let second=1
for(let i=1;i<=10;i++)
{
    let result = first + second //3
    let count=0
    for(let j=1;j<=result;j++)
    {
          if(result%j==0)
          {
            count++;
          }
    }
    if(count==2)
    {
        console.log(result)
        let f=1;
        for(let k=1;k<=result;k++)
        {
             f=f*k;
        }
        console.log("factorial is ",f)
    }
    first=second //1
    second=result //2
   
}