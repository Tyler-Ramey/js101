/* Pseudocode */
/*
  Greet user
  Ask user for loan amount, APR, loan duration in years
  Convert loan duration in years to months
  Convert APR to monthly intrest rate (APR / n)
  - n = duration in months
  Solve for solution using formula:
    let monthlyPayment = loanAmount * (monthlyIntRate / (1 - Math.pow((1 + monthlyIntRate), (-durationMonths))));
  Print result to user in dollars and cents => $123.45 or $123.00
*/

const readline = require('readline-sync');
const MESSAGES = require('./loan_messages.json');

function prompt(key) {
  console.log(`=> ${MESSAGES[key]}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function validateUserInput(userChoice) {
  const VALID_ANSWERS = ['n', 'no', 'y', 'yes'];
  return VALID_ANSWERS.includes(userChoice);
}

function convertAPR(apr) {
  const regex = /0?\.[0-9]*/g;
  
  if (regex.test(apr)) {
    return apr = Number(apr) / 12;
  } else {
    return apr = (Number(apr) / 100) / 12; 
  }
}

prompt('welcome');

while (true) {

  prompt('amount');
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt('error');
    loanAmount = readline.question();
  }

  prompt('apr');
  let apr = readline.question();
  let monthlyIntRate = convertAPR(apr);

  prompt('duration');
  let durationYears = parseFloat(readline.question());

  // Conversions
  let durationMonths = durationYears * 12;

  let monthlyPayment = Number(loanAmount) * (monthlyIntRate / (1 - Math.pow((1 + monthlyIntRate), (-durationMonths))));

  console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);

  prompt('continue');
  let userChoice = readline.question();
  userChoice = userChoice.toLowerCase();

  while (validateUserInput(userChoice) === false) {
    prompt('invalidAnswer');
    userChoice = readline.question();
    userChoice = userChoice.toLowerCase();
  }

  if (userChoice === 'n' || userChoice === 'no') {
    prompt('exit');
    break;
  } else {
    console.clear();
  }

}

