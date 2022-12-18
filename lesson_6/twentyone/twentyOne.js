// Dependencies
const rlsync = require("readline-sync");

// Global constants
const SUITS = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const WINNING_NUMBER = 21;
const DEALER_STAY_NUMER = 17;
const ACE_VALUE = 11;
const COURT_VALUE = 10; // Court cards are Jack, Queen, and King
const GAMES_TO_WIN = 5;

function prompt (msg) {
  console.log(`>>> ${msg}`);
}

function getValues (hand) {
  let values = hand.map(card => card[1]);
  return values;
}

function getUserChoice () {
  prompt('Would you like to hit or stay?');
  let choice = rlsync.question().toLowerCase();
  while (!['hit', 'h', 'stay', 's'].includes(choice)) {
    prompt('Invalid choice, please enter "hit" or "stay".');
    choice = rlsync.question().toLowerCase();
  }

  return choice;
}

function joinHand (hand) {
  let handValues = getValues(hand);
  let allButLast = handValues.slice(0, handValues.length - 1);
  let lastNum = handValues[handValues.length - 1];

  return `${allButLast.join(', ')} and ${lastNum}`;
}

function showHands (pHand, dHand, maskCard) {

  if (maskCard) {
    prompt(`Dealer has: ${dHand[0][1]} and an unknown card.`);
    prompt(`Player has: ${joinHand(pHand)}. Total is ${getTotal(pHand)}`);
  } else {
    prompt(`Dealer has: ${joinHand(dHand)}. Total is ${getTotal(dHand)}`);
    prompt(`Player has: ${joinHand(pHand)}. Total is ${getTotal(pHand)}`);

  }

}

function shuffle (deck) {
  for (let idx = deck.length - 1; idx > 0; idx--) {
    let otherIdx = Math.floor(Math.random() * (idx + 1)); // 0 to idx
    [deck[idx], deck[otherIdx]] = [deck[otherIdx], deck[idx]]; // swap elements
  }

  return deck;
}

function initalizeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex++) {
    let suit = SUITS[suitIndex];

    for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
      let value = VALUES[valueIndex];
      deck.push([suit, value]);
    }
  }

  return shuffle(deck);
}

function deal (deck) {
  let card = deck.shift();
  return card;
}

function dealStartingHand (deck) {
  let pHand = [];
  let dHand = [];

  for (let runs = 0; runs < 2; runs++) pHand.push(deal(deck));
  for (let runs = 0; runs < 2; runs++) dHand.push(deal(deck));

  return [ pHand, dHand ];
}

function getTotal (cards) {
  // cards = [['H', '3'], ['S', 'Q'], ... ]
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "Ace") {
      sum += ACE_VALUE;
    } else if (['Jack', 'Queen', 'King'].includes(value)) {
      sum += COURT_VALUE;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values.filter(value => value === "Ace").forEach(_ => {
    if (sum > WINNING_NUMBER) sum -= 10;
  });

  return sum;
}

function checkBusted (totalValue) {
  return totalValue > WINNING_NUMBER;
}

function checkPlayAgain () {
  console.log('='.repeat(50));
  prompt(`Would you like to play again? (yes/no)`);
  let answer = rlsync.question().toLowerCase();
  while (!['no', 'n', 'yes', 'y'].includes(answer)) {
    prompt(`Please enter yes or no.`);
    answer = rlsync.question().toLowerCase();
  }

  if (answer === 'no' || answer === 'n') return true;

  return false;
}

function findWinner (playerTotal, dealerTotal) {
  // Checking for busts
  if (checkBusted(playerTotal)) return 'Dealer';
  if (checkBusted(dealerTotal)) return 'Player';

  // Comparing scores
  if (playerTotal > dealerTotal) return 'Player';
  if (dealerTotal > playerTotal) return 'Dealer';

  return 'Tie';
}

function playerTurn (pHand, dHand, playerTotal, deck) {
  while (true) {
    playerTotal = getTotal(pHand);
    showHands(pHand, dHand, true);

    let choice = getUserChoice();

    if (choice === 'hit' || choice === 'h') {
      pHand.push(deal(deck));
      playerTotal = getTotal(pHand);
      console.clear();
    }

    if (choice === 'stay' || choice === 's') {
      prompt(`You chose to stay!\n`);
      break;
    } else if (playerTotal > WINNING_NUMBER) {
      prompt(`You busted! Your total was ${playerTotal}\n`);
      break;
    }
  }

  return [ pHand, playerTotal ];
}

function dealerTurn (dHand, deck) {

  while (getTotal(dHand) < DEALER_STAY_NUMER) {
    dHand.push(deal(deck));
  }

  return dHand;
}
function resetGame () {
  console.clear();
  return [ 0, 0 ]; // Sets wins to 0
}
function roundLoop () {
  let playerTotal;

  while (true) {
    let deck = initalizeDeck();

    let [ pHand, dHand ] = dealStartingHand(deck);

    [ pHand, playerTotal ] = playerTurn(pHand, dHand, playerTotal, deck);

    // Checks to see if the player busted.
    // If player busted, the dealer is skipped
    if (!checkBusted(playerTotal)) {
      dHand = dealerTurn(dHand, deck);
    }

    let dealerTotal = getTotal(dHand);

    showHands(pHand, dHand, false);

    let winner = findWinner(playerTotal, dealerTotal);

    if (winner === 'Tie') {
      prompt('That round ended in a tie!\n');
      return winner;
    }

    prompt(`The ${winner} won that round!\n`);

    return winner;
  }
}

function game() {
  let playerWins = 0;
  let dealerWins = 0;

  while (true) {
    while (playerWins < GAMES_TO_WIN && dealerWins < GAMES_TO_WIN) {
      let winner = roundLoop();

      if (winner === 'Player') playerWins += 1;
      if (winner === 'Dealer') dealerWins += 1;

      prompt(`Score\n>>> Player: ${playerWins}\n>>> Dealer: ${dealerWins} `);

      rlsync.keyInPause('Press any key besides "Enter" to continue.', {guide:false});
      console.clear();
    }

    if (playerWins === GAMES_TO_WIN) prompt(`Great job! You won the game!`);
    if (dealerWins === GAMES_TO_WIN) prompt(`Bummer.. the dealer won the game.`);

    let quit = checkPlayAgain();

    if (quit) break;

    [ playerWins, dealerWins ] = resetGame();
  }
}

console.clear();

prompt('Welcome to Twenty-One!');
prompt('Be the first to reach 21 each round without going over.');
prompt('Win 5 rounds to win the game\n');

game();

prompt('Thanks for playing Twenty-One!');