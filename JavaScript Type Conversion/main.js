let y = "5";
let x = + y;
document.getElementById("demo").innerHTML = typeof y + "<br>" + typeof x;

let z = 123;
document.getElementById("demo1").innerHTML =
  String(z) + "<br>" +
  String(123) + "<br>" +
  String(100 + 23);

  let a = 123;
  document.getElementById("demo2").innerHTML =
    a.toString() + "<br>" +
     (123).toString() + "<br>" +
     (100 + 23).toString();
