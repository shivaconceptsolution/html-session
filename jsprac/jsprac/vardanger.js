let a=100
{
   let a=20
   
   {
    let a=3000;
    console.log("most inner",a)
   }
   console.log("inner",a)
}
console.log("outer ",a)