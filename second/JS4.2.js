function school() {
    var x = prompt();
    x = parseInt(x);
    var c = "";
    if (x <= 0) {
        c = "Error"
    } else if (x <= 4) {
        c = "Primary school";
    } else if (x <= 9) {
        c = "Middle school";
    } else if (x <= 11) {
        c = "High school";
    } else {
        c = "Error";
    }
    s="<h3 style='text-align:center;}'>"+c+"</h3>";
    return s;

}

function butt() {
    y=school();
    w=window.open("", "", "width:100, height:100");
    w.document.open();
    w.document.write(s);
    w.document.close();
}

