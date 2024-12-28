let arr = [1,3,7,12,34,11]
let mx=arr[0]
let smax=arr[0]
for(let i=1;i<arr.length;i++)
{
    if(mx<arr[i])
    {
        smax=mx
        mx=arr[i]
    }
    else if(smax<arr[i])
    {
        smax=arr[i]
    }
}
console.log("Maximum element in array is: "+mx)