let x = 10;
x+=5;
document.getElementById("demo").innerHTML="giá trị x:" +x;


let text = "Hello";
text += " World";
document.getElementById("demo1").innerHTML = text;

let y=20;
y-=5;
document.getElementById("demo2").innerHTML="giá trị x:" +y;

let z=12;
z*=5;
document.getElementById("demo3").innerHTML="giá trị x:" +z;

let a=5;
a **=2;
document.getElementById("demo4").innerHTML="giá trị x:" +a;

let b=10;
b /=2;
document.getElementById("demo5").innerHTML="giá trị x:" +b;

let c=5;
c %=2;
document.getElementById("demo6").innerHTML="giá trị x:" +c;

let d= -5;
d <<= 4;
document.getElementById("demo7").innerHTML="giá trị x:" +d;

let e= -5;
e >>= 4;
document.getElementById("demo8").innerHTML="giá trị x:" +e;

let f = -100;
f >>>= 5;
document.getElementById("demo9").innerHTML = "Value of x is: " + f;

let g = 20;
g &= 5;
document.getElementById("demo10").innerHTML="giá trị x:" +g;

let h = 20;
h |= 5;
document.getElementById("demo10").innerHTML="giá trị x:" +h;

let i = 2;
i ^=3;
document.getElementById("demo11").innerHTML="giá trị x:" +i;

let k = 10;
k &&=5;
document.getElementById("demo12").innerHTML="giá trị x:" + k;

let t = 10;
t ||=5;
document.getElementById("demo13").innerHTML="giá trị x:" + t;

let r = 10;
r ??=5;
document.getElementById("demo14").innerHTML="giá trị x:" + r;
