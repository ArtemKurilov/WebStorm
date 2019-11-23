function f() {
    title=document.getElementById("title");
    ti=title.value;

    text=document.getElementById("text");
    te=text.value;

    rad1=document.getElementById("rad1");
    rad2=document.getElementById("rad2");
    rad3=document.getElementById("rad3");
    rad4=document.getElementById("rad4");

    opt1=document.getElementById("opt1");
    opt2=document.getElementById("opt2");
    opt3=document.getElementById("opt3");
    opt4=document.getElementById("opt4");

    ch1=document.getElementById("ch1");
    ch2=document.getElementById("ch2");
    ch3=document.getElementById("ch3");

    if (rad1.checked) col="yellow";
    if (rad2.checked) col="white;";
    start="<html style='background-color:"+col+"'>";
    if (opt1.selected) num="3";
    if (opt2.selected) num="6";
    s="<head></head><body><h"+num+" style='text-align: center;";
    if (ch1.checked) s+=" font-weight:bold;";
    if (ch1.checked) s+=" font-style:italic;";
    if (ch1.checked) s+=" text-decoration:underline;";
    s+="'>"+ti+"</h"+num+">";
    if (rad3.checked) num1="0.9";
    if (rad4.checked) num1="1.4";
    par="<p style='text-align:center; font-size:20px; line-height:"+num1+"'>"+te+"</p>";
    if (opt3.selected) im="sausage.jpg";
    if (opt4.selected) im="cheese.png";
    ima="<div style='text-align: center;'><img style='height:200px; width: 200px' src='"+im+"' ></div></body></html>";
    win=start+s+par+ima;
    w=window.open();
    w.document.write(win)


}

