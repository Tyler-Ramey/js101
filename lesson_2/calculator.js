//Ask user for 1st number
//Ask user for 2nd number
//Ask user for operation
//Perform the operation
//Print result
const messages = require('./calculator_messages.json');
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
prompt(messages.welcome);

prompt(messages.first);
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt(messages.invalidNumber);
  number1 = readline.question();
}

prompt(messages.second);
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt(messages.invalidNumber);
  number2 = readline.question();
}

prompt(messages.operation);
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt(messages.invalidOperation);
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

prompt(messages.continue);
let answer = readline.question();


while (invalidContinueResponse(answer)) {
  prompt(messages.invalidAnswer);
  answer = readline.question();
}

answer = answer.charAt(0);

answer === 'y' ? run = true : run = false;

}
