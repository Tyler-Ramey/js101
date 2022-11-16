const readline = require('readline-sync');
<<<<<<< HEAD
//const MESSAGES = require('./rps_messages.json');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
=======
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
>>>>>>> test
const VALID_ANSWER = [ 'n', 'no', 'y', 'yes'];

const prompt = msg => {
  console.log(`#>> ${msg}`);
};

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && (computerChoice === 'scissors'|| computerChoice === 'lizard')) ||
      (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
      (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
      (choice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
      (choice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock'))) {
    prompt('You win!');
  } else if ((choice === 'rock' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
             (choice === 'paper' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
             (choice === 'scissors' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
             (choice === 'lizard' && (computerChoice === 'scissors' || computerChoice === 'rock')) ||
             (choice === 'spock' && (computerChoice === 'lizard' || computerChoice === 'paper'))) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}



while (true) {
  console.clear(); // Clears the console on startup and replays
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That is not a valid choice.");
    choice = readline.question().toLowerCase();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[4];

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