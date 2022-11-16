const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const VALID_ANSWER = [ 'n', 'no', 'y', 'yes'];

const prompt = msg => {
  console.log(`#>> ${msg}`);
};

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {

    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
             (choice === 'paper' && computerChoice === 'scissors') ||
             (choice === 'scissors' && computerChoice === 'rock')) {
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
  } else {
    console.clear(); //Clears the console on continue
  }
}