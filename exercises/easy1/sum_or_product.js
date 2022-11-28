// Write a program that asks the user to enter an integer greater than 0, 
// then asks whether the user wants to determine the sum or the product 
// of all numbers between 1 and the entered integer, inclusive.
const rlsync = require("readline-sync");

let sumOfNums = 0;
let productOfNums = 1;

let number = rlsync.questionInt('Please enter an integer greater than 0\n> ');
let userAnswer = rlsync.question('Enter "s" to compute the sum, or "p" to compute the product.\n> ');

while (!['s', 'p'].includes(userAnswer.toLowerCase())) {
 userAnswer = rlsync.question('Enter "s" to compute the sum, or "p" to compute the product.\n> '); 
}

let originalNum = number;

if (userAnswer === 's') {
  for (number; number > 0; number -= 1) {
    sumOfNums += number;
  }
  
  console.log(`The sum of integers between 1 and ${originalNum} is ${sumOfNums}`);
} else {
  for (number; number > 0; number -= 1) {
    productOfNums *= number;
  }
  
  console.log(`The product of integers between 1 and ${originalNum} is ${productOfNums}`);
}