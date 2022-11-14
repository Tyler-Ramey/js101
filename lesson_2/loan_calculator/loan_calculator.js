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
    apr = Number(apr) / 12;
    return apr;
  } else {
    apr = (Number(apr) / 100) / 12;
    return apr;
  }
}

function getLoanAmount() {
  prompt('amount');
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt('error');
    loanAmount = readline.question();
  }

  return Number(loanAmount);
}

function getAPR() {
  prompt('apr');
  let apr = readline.question();
  while (invalidNumber(apr)) {
    prompt('error');
    apr = readline.question();
  }

  return convertAPR(apr);
}

function getDuration() {
  prompt('duration');
  let duration = readline.question();

  while (invalidNumber(duration)) {
    prompt('error');
    duration = readline.question();
  }

  return Number(duration);
}

prompt('welcome');

while (true) {

  let loanAmount = getLoanAmount();
  let monthlyIntRate = getAPR();
  let durationYears = getDuration();


  // Conversions
  let durationMonths = durationYears * 12;

  let monthlyPayment = loanAmount * (monthlyIntRate / (1 - Math.pow((1 + monthlyIntRate), (-durationMonths))));

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

