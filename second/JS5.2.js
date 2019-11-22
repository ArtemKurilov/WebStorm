function test(a, b) {
    s = "";
    if (a.length == 1 && b.length == 1) {
        s = "two";
    } else if (a.length == 1 || b.length == 1) {
        s = "one";
    } else {
        s = "zero";
    }
    return s
}
function fk() {
    aa=document.getElementById("px1");
    bb=document.getElementById("px2");
    a=aa.value;
    b=bb.value;
    x=test(a, b);
    alert(x) ;
}