const PI = 3.141592653589793;

document.getElementById("demo").innerHTML="printf:" +PI;

const cars=["Lambo","BMW","Vin"]
cars[0]="Ford";
cars.push("Audi");
document.getElementById("demo1").innerHTML="Cars:" +cars;

const motor = {type:"Fiat", model:"500", color:"white"};
// Change a property:
motor.color = "red";
motor.type="kawasaki";

document.getElementById("demo2").innerHTML="Motor:" +motor.type;

const x=2;
{
    const x=3;
}
document.getElementById("demo3").innerHTML="Value:" +x;