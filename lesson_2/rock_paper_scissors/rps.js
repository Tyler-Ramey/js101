const readline = require('readline-sync');
const MESSAGES = require('./rps_messages.json');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const VALID_ANSWER = [ 'n', 'no', 'y', 'yes'];
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

const SHORTHAND = {
  r: 'rock',
  p: 'paper',
  l: 'lizard',
  sc:'scissors',
  sp:'spock',
};

let playerWinCount = 0;
let computerWinCount = 0;
let run = true;

const prompt = key => {
  console.log(`#>> ${MESSAGES[key]}`);
};

const displayChoices = () => {
  console.log(`#>> Choose one: ${VALID_CHOICES.join(', ')}`);
  prompt('shorthand');
};

const mapUserInput = choice => {
  if (VALID_CHOICES.includes(choice)) {
    return choice;
  }

  choice = SHORTHAND[choice];
  return choice;
};

const validateUserInput = choice => {
  while (!VALID_CHOICES.includes(choice)) {
    console.clear();
    prompt('invalidChoice');
    displayChoices();
    choice = readline.question().toLowerCase();
    choice = mapUserInput(choice);
  }

  return choice;
};

const getUserChoice = () => {
  displayChoices();
  let choice = readline.question().toLowerCase();
  choice = mapUserInput(choice);
  choice = validateUserInput(choice);
  return choice;
};

const getComputerChoice = () => {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  return computerChoice;
};

const playerWins = (choice, computerChoice) => {
  return WINNING_COMBOS[choice].includes(computerChoice);
};

const incrementWinner = winner => {
  if (winner === 'user') {
    playerWinCount += 1;
  } else {
    computerWinCount += 1;
  }
};

const displayWinner = (choice, computerChoice) => {
  console.log(`#>> You chose ${choice}. The computer chose ${computerChoice}`);

  if (playerWins(choice, computerChoice)) {
    incrementWinner('user');
    prompt('winRound');
  } else if (choice === computerChoice) {
    prompt("tie");
  } else {
    incrementWinner('computer');
    prompt("loseRound");
  }
};

const getPlayAgain = () => {
  prompt('continue');
  let answer = readline.question().toLowerCase();

  while (!VALID_ANSWER.includes(answer)) {
    prompt('invalidAnswer');
    answer = readline.question().toLowerCase();
  }

  if (answer === 'no' || answer === 'n') {
    return false;
  } else {
    return true;

  }
};

console.clear(); // Clears the console on startup

prompt('welcome');

while (run) { // Outer loop for playing again

  while (true) { // Inner loop for each round

    // Displays score only after the first win;
    if (playerWinCount !== 0 || computerWinCount !== 0) {
      console.log(`#>> The score is: User - ${playerWinCount} to Computer - ${computerWinCount}\n`);
    }

    let choice = getUserChoice();
    let computerChoice = getComputerChoice();
    displayWinner(choice, computerChoice);

    if (playerWinCount === 3) {
      prompt('winGame');
      break;
    } else if (computerWinCount === 3) {
      prompt('loseGame');
      break;
    }

  }

  run = getPlayAgain();
  if (run) {
    console.clear();
    playerWinCount = 0;
    computerWinCount = 0;
  }
}