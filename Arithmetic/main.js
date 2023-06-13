let x=5;
let y=2;
let z=x+y;

document.getElementById("demo").innerHTML= "giá trị demo:" +z;

let a=x-y;
document.getElementById("demo1").innerHTML = "giá trị demo1:" +a;

let b=x*y;
document.getElementById("demo2").innerHTML = "giá trị demo2:" +b;

let c=x%y;
document.getElementById("demo4").innerHTML ="giá trị demo4:" +c;

let d=10;
let e= d/x;
document.getElementById("demo3").innerHTML = "giá trị demo3:" +e;

x++;
let f=x;
document.getElementById("demo5").innerHTML ="giá trị demo5:" +f;

y--;
let g=y;
document.getElementById("demo6").innerHTML = "giá trị demo6:" +g;

let n=3;
let h= n ** 2;
document.getElementById("demo7").innerHTML = "giá trị demo7:" +h;

let m=9;
let q= Math.pow(m,2);
document.getElementById("demo8").innerHTML="giá trị demo8:" +q;