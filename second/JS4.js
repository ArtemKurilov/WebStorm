var x=prompt();
x=parseInt(x);
var c=""
if (x<=0){
    c="Error"
}
else if (x<=4){
    c="Primary school";
}
else if (x<=9){
    c="Middle school";
}
else if (x<=11){
    c="High school";
}
else {
    c="Error";
}
document.write("<h3 style='text-align:center;}'>"+c+"</h3>")
