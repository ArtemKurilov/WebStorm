function test() {
    a = prompt();
    b = prompt();
    s="";
    if (a.length == 1 && b.length == 1) {
        s = "two";
    } else if (a.length == 1 || b.length == 1) {
        s = "one";
    } else {
        s = "zero";
    }
    return s
}
s=test();
ob=document.getElementById("px");
ob.value=s;