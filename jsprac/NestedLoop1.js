for(let i=1;i<=5;i++)
{
    let s=''
    var asc=65
    for(let j=1;j<=6-i;j++)
    {
       
       if(j%2!=0){
           s = s + String.fromCharCode(asc) +" "
       }
       else
       {
         s = s + String.fromCharCode(asc+32) +" "
         asc++;
       }
      
    }
    
    console.log(s)
    
    
}