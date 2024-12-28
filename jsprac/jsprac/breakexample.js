let salary=25000;
for(let empid=1001;empid<=1010;empid++)
{
   
    if( empid==1005 || empid==1007)
    {
        continue
    }
    console.log("empid is ",empid,"salary is ",salary);
}