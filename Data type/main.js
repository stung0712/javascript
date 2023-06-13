/* Number type */

var a=1;
var b=2;
var c=1.5;
console.log(typeof c);


/*String type*/

var fullName='Hello';

console.log(fullName);
console.log(typeof fullName);

/*Boolean type */

var isSucces= true;

 
/*undefined type */

var age;

console.log(age);

/*Null */
var isNull= null;
console.log(isNull);
console.log(typeof isNull);

/* Symbol*/
var id = Symbol('id');
var id2 = Symbol('id');
console.log(id === id2);

/* Function */

var myFunction=function(){
    alert('Xin chao!!!!');
}
myFunction();

/*object type */
var myObject={
    name:'Tung',
    age:22,
    adress:'Ha Noi',
}
console.log('myObject',myObject);

var myArray=[
    'Javascript',
    'PHP',
    'Ruby'
];

console.log(myArray);