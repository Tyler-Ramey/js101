//Ask user for 1st number
//Ask user for 2nd number
//Ask user for operation
//Perform the operation
//Print result
const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidContinueResponse(answer) {
  if (answer[0] === 'y' || answer[0] === 'n') {
    return false;
  } else {
    return true;
  }
}

let run = true;

while (run) {
prompt('Welcome to Calculator');

prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt('Number not valid. Please enter a valid number.');
  number1 = readline.question();
}

prompt("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt('Number not valid. Please enter a valid number.');
  number2 = readline.question();
}

prompt("What operation would you like to perform\n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;

  }
console.log(`The result is: ${output}`);

prompt('Would you like to continue?\n Please enter y or n');
let answer = readline.question();


while (invalidContinueResponse(answer)) {
  prompt('Invalid response. Enter y or n');
  answer = readline.question();
}

answer = answer.charAt(0);

answer === 'y' ? run = true : run = false;

}
