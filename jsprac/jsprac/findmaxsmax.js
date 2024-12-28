let mobile=6174
let max=0
let smax=0
while(mobile!=0)
{
    let data = mobile%10;
    if(max<data)
    {
        smax=max //4
        max=data //7
    }
    else if(smax<data)
    {
         smax=data; //
    }
    
    mobile=parseInt(mobile/10)
}
console.log("max",max)
console.log("second max",smax)