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

let playerWinCount = 0;
let computerWinCount = 0;
let run = true;

const prompt = key => {
  console.log(`#>> ${MESSAGES[key]}`);
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
    incrementWinner('comuter');
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

while (run) {

  while (true) {
    console.log(playerWinCount, computerWinCount);
    console.log(`#>> Choose one: ${VALID_CHOICES.join(', ')}`);
    let choice = readline.question();

    while (!VALID_CHOICES.includes(choice)) {
      prompt('invalidChoice');
      choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

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