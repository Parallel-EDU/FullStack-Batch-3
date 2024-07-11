// import { addition } from "./module.js";

const number = [1, 2, 3, 4, 5];
// 0  1  2  3  4
const sum = number.reduce((total, num) => total + num, 0);

console.log(sum);

const firstEven = number.find((num) => num % 2 === 0);

console.log(firstEven);

const firstEvenIndex = number.findIndex((num) => num % 2 === 0);

console.log(firstEvenIndex);

//Template literals

const name = "John";
const greeting = `Hello, ${name}`;

// alert(greeting);

//Destructuring

const [a, b] = [1, 2];

console.log("a = " + a);

const { firstName, age } = { firstName: "Ravi", age: 27 };

console.log(firstName);

//Spread Operator

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4, 5];
console.log(arr2);

// Rest Operator

function add(...num) {
  return num.reduce((acc, curr) => acc + curr, 0);
}

console.log(add(1, 2, 3));

//using Addition from Module

// console.log(addition(1, 2));

//setTimeout

const Header = document.getElementById("header");
setTimeout(() => {
  Header.innerText = "Welcome";
}, 5000);
