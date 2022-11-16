const readline = require('readline-sync');
const VALID_CHOICES = ['rock/r', 'paper/p', 'scissors/sc', 'lizard/l', 'spock/sp'];
const VALID_ANSWER = [ 'n', 'no', 'y', 'yes'];
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

const prompt = msg => {
  console.log(`#>> ${msg}`);
}

const displayWinner = (choice, computerChoice) => {
  prompt(`You chose ${choice}. The computer chose ${computerChoice}`);
  
  if (playerWins(choice, computerChoice)) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
  }
}

const playerWins = (choice, computerChoice) => {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

while (true) {
  console.clear(); // Clears the console on startup and replays
  
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That is not a valid choice.");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Would you like to play again? (y/n)');
  let answer = readline.question().toLowerCase();

  while (!VALID_ANSWER.includes(answer)) {
    prompt('Please enter yes or no');
    answer = readline.question().toLowerCase();
  }

  if (answer === 'no' || answer === 'n') {
    prompt('Thank you for playing!');
    break;
  }
}