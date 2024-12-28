s = "neeraj"
bname=''
for(var i=0;i<s.length;i++)
{
    let asc = parseInt(s[i].charCodeAt())
    let data=''
    while(asc!=0)
    {
        data = asc%2+data
        asc=parseInt(asc/2)
    }
    bname+=data
    
    
}
console.log(bname)
