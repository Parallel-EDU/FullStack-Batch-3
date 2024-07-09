let name = "John"; //string
const age = 30; //Number
var Teach = false; //Boolean
let students = ["John", "Ed"]; //Array
let person = { name: "Bob", age: 34 }; //Object
let unknown = null; //null
let notDefined; //undefined

notDefined = "Javascript";
/*
const can not be overwritten
name = 'Ed'
age = 31
*/
alert(name + age);

let a = 5;
let b = 8;

//Arithematic operation
let c = a + b; //Addition
console.log(c);
console.log(8 - 5); //Subtraction
console.log(a * b); //Multiplication
console.log(b / a); //Division
console.log(b % a); //Modulus (Remainder)

//Comparision Operator

let d = 5;
let e = 5;

console.log(d !== e); //notequal
console.log(d != e); //notequal
console.log(d == e); //Equal
console.log(d === e); //Equal
console.log(d < 6); //less than
console.log(d > 6); //Greater than
console.log(d <= 6); //less than or equal to
console.log(d >= 6); //Greater than or equal to

//Logical Operators
let userage = 17;
let andOperator = 5 <= userage && userage <= 15; //And Operator
console.log(andOperator);
let orOperator = 7 <= userage || userage <= 15; //Or Operator
console.log(orOperator);
let notOperator = !(18 <= userage); //Not Operator
console.log(notOperator);

document.getElementById("para").innerHTML = "This is a para";
