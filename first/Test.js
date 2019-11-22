var str = prompt();
var strRev = "";
for (i = str.length-1; i >= 0; i--) {
    strRev += str[i];
}
if (str==strRev){
    alert("YES")
}
else{
    alert("NO")
}