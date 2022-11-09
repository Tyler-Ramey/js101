//Ask user for 1st number
//Ask user for 2nd number
//Ask user for operation
//Perform the operation
//Print result
const LANG = 'cn'
const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');

function prompt(key) {
  let msg = message(key);
  console.log(`=> ${msg}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidContinueResponse(answer) {
  if (answer === 'y' || answer === 'n') {
    return false;
  } else {
    return true;
  }
}

function message(key) {
  return MESSAGES[LANG][key];
}
let run = true;

while (run) {
prompt("welcome");

prompt("first");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("invalidNumber");
  number1 = readline.question();
}

prompt("second");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("invalidNumber");
  number2 = readline.question();
}

prompt("operation");
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("invalidOperation");
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

prompt("continue");
let answer = readline.question();


while (invalidContinueResponse(answer)) {
  prompt("invalidAnswer");
  answer = readline.question();
}

answer === 'y' ? run = true : run = false;

}
