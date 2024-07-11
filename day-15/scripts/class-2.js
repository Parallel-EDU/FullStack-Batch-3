const names = ["Ahmed", "Manoj", "Ravi", "Rahul"];

//Array iteration Method:

//forEach
// Array_name.forEach(function(element,array)){
// })
// console.log(names[0])
// console.log(names[1])
// console.log(names[2])
// console.log(names[3])

names.forEach((name, index) => {
  console.log(name + " : " + index);
});

//map()

const number = [1, 2, 3, 4, 5];
const double = number.map((num) => num * 2);
console.log(double);

//filter

const evenNumber = number.filter((num) => num % 2 === 0);
console.log(evenNumber);

const oddNumber = number.filter((num) => num % 2 !== 0);
console.log(oddNumber);

//Objects

// const oject_name = {
//   key1: value1,
//   key2: value2,
//   key3: value3,
//   key4: value4,
// };

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isEmployed: true,
};

console.log(person.age);

const car = new Object();

console.log(car);

car.brand = "Toyota";
console.log(car);

car.model = "Corola";
console.log(car);

car.year = 2020;
console.log(car);

//DOM manipulation

// Using ID
const header = document.getElementById("Header");
header.innerHTML = "Some Text";

//Using Class

// document.getElementsByClassName("para").innerHTML = "This is a Header";

//Using Tag name

document.getElementsByTagName("main");

//Query Selector

const element = document.querySelector(".para");
element.innerHTML = "<i>This is a Para</i>";

//Query Selector All

// const para = document.querySelectorAll('.para')
// para.innerHTML = 'This is a Para'

element.setAttribute("class", "newPara");

const para2 = document.querySelector('.para2');
para2.innerText = 'This text is added using JS';

