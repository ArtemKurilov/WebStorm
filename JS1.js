var s=prompt();
l=s.length;
var k="";
for (i=l-1; i>=0; i--){
    k=s[i];
}
alert(k);
if (k==s){
    alert("YES");
}
else{
    alert("NO");
}