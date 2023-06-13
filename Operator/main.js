let text1 = "What a very ";
text1 += "nice day";
document.getElementById("demo").innerHTML = text1;

let text2 = "Harry";
let text3 = "Portter";
let text4 = text2 + " " + text3;
document.getElementById("demo1").innerHTML = text4;

let label1 = "A";
let label2 = "B";
let result = label1 > label2;
document.getElementById("demo2").innerHTML = "Is A less than B? " + result;

let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
document.getElementById("demo3").innerHTML =
x + "<br>" + y + "<br>" + z;


let a=10;
a +=9;
document.getElementById("demo4").innerHTML="value:" +a;

let label3="20";
let label4="10";
let results = label3 > label4;
document.getElementById("demo5").innerHTML="Is 20 bigger than 10?" +results;