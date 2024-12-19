let first=-1
let second=1
let i=1
while(i<=10)
{
    let result = first + second //3
    console.log(result) //0 1 1 2 3
    first=second //1
    second=result //2
    i++;
}