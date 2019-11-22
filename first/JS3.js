function f() {
    s = new Array (2, 3, 46, 69,3 , 4, 7777, 420);
    var m=s[0];
    for (i=0; i<s.length; i++){
        if (m<s[i]){
            m=s[i];
        }
    }
    alert(m)
}