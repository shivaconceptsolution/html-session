a="2001+3002i"
b="4000+5000i"
r1pos = a.indexOf("+")
r2pos = b.indexOf("+")
r1 = a.substring(0,r1pos)
r2 = b.substring(0,r2pos)
i1 = a.substring(r1pos+1,a.length-1)
i2 = b.substring(r2pos+1,b.length-1)
r=parseInt(r1)+parseInt(r2)
i = parseInt(i1)+parseInt(i2)
console.log(r,"+",i,"i")
i = r1*i2+r2*i1
r = r1*r2-i1*i2
console.log(r,"+",i,"i")