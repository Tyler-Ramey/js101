const rlsync = require("readline-sync");

const SUITS = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const WINNING_NUMBER = 21;
const DEALER_STAY_NUMER = 17;

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

function showHands (playerHand, dealerHand, total) {
  let dealerCard = dealerHand[0][1];
  prompt(`Dealer has: ${dealerCard} and an unknown card.`);
  prompt(`Player has: ${joinHand(playerHand)}. Total is ${total}`);
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
  let playerHand = [];
  let dealerHand = [];

  for (let runs = 0; runs < 2; runs++) playerHand.push(deal(deck));
  for (let runs = 0; runs < 2; runs++) dealerHand.push(deal(deck));

  return [ playerHand, dealerHand ];
}

function getTotal (cards) {
  // cards = [['H', '3'], ['S', 'Q'], ... ]
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "Ace") {
      sum += 11;
    } else if (['Jack', 'Queen', 'King'].includes(value)) {
      sum += 10;
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

function findWinner (pTotal, dTotal) {
  // Checking for busts
  if (checkBusted(pTotal)) return 'Dealer';
  if (checkBusted(dTotal)) return 'Player';

  // Comparing scores
  if (pTotal > dTotal) return 'Player';
  if (dTotal > pTotal) return 'Dealer';

  return 'Tie';
}

function playerTurn (playerHand, dealerHand, playerTotal, deck) {
  
  while (true) {
    playerTotal = getTotal(playerHand);
    showHands(playerHand, dealerHand, playerTotal);

    let choice = getUserChoice();

    if (choice === 'hit' || choice === 'h') {
      playerHand.push(deal(deck));
      playerTotal = getTotal(playerHand);
      console.clear();
    }

    let busted = checkBusted(playerTotal);

    if (choice === 'stay' || choice === 's') {
      prompt(`You chose to stay!`);
      break;
    } else if (busted) {
      prompt(`You busted! Your total was ${playerTotal}`);
      break;
    }
  }

  return [ playerHand, playerTotal ];
}

function dealerTurn (dealerHand, dTotal, deck) {
  dTotal = getTotal(dealerHand);
  while (dTotal < DEALER_STAY_NUMER) {
    dealerHand.push(deal(deck));
    dTotal = getTotal(dealerHand);
  }

  return [ dealerHand, dTotal ];
}

function game() {
let pTotal, dTotal;

  while (true) {
    let deck = initalizeDeck();

    let [ playerHand, dealerHand ] = dealStartingHand(deck);

    [ playerHand, pTotal ] = playerTurn(playerHand, dealerHand, pTotal, deck);

    // Checks to see if the player busted.
    // If player busted, the dealer is skipped
    if (!checkBusted(pTotal)) {
      [ dealerHand, dTotal ] = dealerTurn(dealerHand, dTotal, deck);
    }


    prompt(`Dealer has: ${joinHand(dealerHand)}. Total is ${dTotal}`);
    prompt(`Player has: ${joinHand(playerHand)}. Total is ${pTotal}`);

    let winner = findWinner(pTotal, dTotal);

    if (winner === 'Tie') {
      prompt(`This round ended in a tie!`);
    } else {
      prompt(`The ${winner} won this round!`);
    }

    if (checkPlayAgain()) break;

    console.clear();
  }
}

console.clear();

prompt('Welcome to Twenty-One!');
prompt('Be the first to reach 21 without going over.');

game();

prompt('Thanks for playing Twenty-One!');