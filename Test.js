var str = prompt();
var strRev = ""; // строка в обратном порядке
for (i = str.length-1; i >= 0; i--) {
    strRev += str[i];
}
if (str==strRev){
    alert("YES")
}
else{
    alert("NO")
}