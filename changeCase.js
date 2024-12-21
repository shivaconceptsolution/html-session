ch='G'
asc = ch>='A' && ch<='Z' ? ch.charCodeAt()+32 : ch;
console.log(String.fromCharCode(asc))
