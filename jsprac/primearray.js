let arr = [2,7,9,10,15,11,24]
let primearr = []
for(let i=0;i<arr.length;i++)
{
    if(arr[i]!=2 && arr[i]%2==0)
    {
        continue
    }
    else
    {
        var c=0;
        for(let j=2;j<arr[i];j++)
        {
            if(arr[i]%j==0)
            {
                c=1
                break
            }
        }
        if(c==0)
        {
            primearr.push(arr[i])
        }
    }
}

for(let data of primearr)
{
    console.log(data)
}