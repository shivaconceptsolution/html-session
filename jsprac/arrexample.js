let arr = [1,3,7]
arr[0]=100
console.log(arr[0])
console.log(arr[arr.length-1])
console.log("Using for loop")
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}
console.log("Using for loop")
for(let i=arr.length-1;i>=0;i--)
{
    console.log(arr[i])
}
console.log("Using for of loop")
for(let data of arr)
{
    console.log(data)
}
console.log("Using for in loop")
for(let index in arr)
{
    console.log(arr[index])
}
console.log("Using forEach loop")
arr.forEach(function(data){
    console.log(data)
})