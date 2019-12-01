function ispali(i){
var str=String(i);
var strRev = "";
for (i = str.length-1; i >= 0; i--) {
    strRev += str[i];
}
if (str==strRev){
    return true;
}
else{
    return false;
}
}

function ispr(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return true;
}


var k=0
for (i=10000 ; i<=99999 ; i++){
if (ispr(i)==true){
if (ispali(i)==true){
k++
}
}
}


alert(k)
