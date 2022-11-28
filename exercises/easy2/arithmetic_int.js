// Write a program that prompts the user for two positive integers, and then prints 
//the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. 

const rlsync = require("readline-sync");

let x = rlsync.questionInt('==> Enter a number: ');
let y = rlsync.questionInt('==> Enter another number: ');

console.log(`==> ${x} + ${y} = ${x + y}`);
console.log(`==> ${x} - ${y} = ${x - y}`);
console.log(`==> ${x} * ${y} = ${x * y}`);
console.log(`==> ${x} / ${y} = ${x / y}`);
console.log(`==> ${x} % ${y} = ${x % y}`);
console.log(`==> ${x} ** ${y} = ${x ** y}`);