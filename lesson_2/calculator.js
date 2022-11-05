//Ask user for 1st number
//Ask user for 2nd number
//Ask user for operation
//Perform the operation
//Print result
const readline = require('readline-sync');

console.log('Welcome to Calculator');

console.log("What's the first number?");
let number1 = Number(readline.question());

console.log("What's the second number?");
let number2 = Number(readline.question());

console.log("What operation would you like to perform\n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readline.question();

let output;
switch (operation) {
  case '1':
    output = number1 + number2;
    break;
  case '2':
    output = number1 - number2;
    break;
  case '3':
    output = number1 * number2;
    break;
  case '4':
    output = number1 / number2;
    break;
  default:
    console.log('Not a valid entry.');
}

console.log(`The result is: ${output}`);
