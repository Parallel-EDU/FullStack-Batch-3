//Conditional Statements

// if - syntax
// if(condition){
//     code that runs when condition is true
// }

// if-else - syntax
// if(condition){
//     code that runs when condition is true
// } else{
//     code that runs when condition is false
// }
// if-elseif - syntax
// if(condition1){
//     code that runs when condition1 is true
// } else if(condition2){
//     code that runs when condition2 is true and condition 1 is false
// }
// .
// .
// else if(conditionN){
//     code that runs when conditionN is true and all the conditions before are false
// } else{
//     code that runs when all the condition are false
// }

// switch - syntax
// switch (expression) {
//   case value1:
//code that will run if expression ===value1
//     break;
//   case value2:
//code that will run if expression ===value2
//     break;
//   default:
//code that runs when expression doesn't match any case
// }

let a = 7;

if (a % 2 === 0) {
  console.log(a + " is even");
  if (a < 10 && a > 5) {
    console.log("a is less than 10 and greater than 5");
  } else if (a < 20 && a > 10) {
    console.log("a is less than 20");
  } else if (a < 30 && a > 20) {
    console.log("a is greater than 20 and less than 30");
  }
} else {
  console.log(a + " is odd");
}

if (a < 10 && a > 5) {
  console.log("a is less than 10 and greater than 5");
} else if (a < 20 && a > 10) {
  console.log("a is less than 20");
} else if (a < 30 && a > 20) {
  console.log("a is greater than 20 and less than 30");
}

let firstnumber = 5;
let secondnumber = 8;
let operation = 'not';
switch (operation) {
  case 'add':
    console.log(firstnumber + secondnumber);
    break;
  case 'sub':
    console.log(firstnumber - secondnumber);
    break;
  default:
    console.log(firstnumber + " " + secondnumber);
}

//iteration/loops

//for loop
// for(initialization; condition; increment/decrement){
//     //code that runs untill the condition is false
// }

//while loop
// initialization
// while(condition){
//      //code that runs untill the condition is false
//      //increment/decrement
// }

//do-while loop

// initialization
// do{
//      //code that runs untill the condition is false
//      //increment/decrement
// } while(condition)

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

for(let x = 1; x <= 5; x++){
    console.log(x);
}

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

let j = 1;
 do {
  console.log(j);
  j++;
} while (j <= 5)