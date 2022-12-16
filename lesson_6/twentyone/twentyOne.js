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

function showHands (playerHand, dealerHand) {
  let dealerCard = dealerHand[0][1];
  prompt(`Dealer has: ${dealerCard} and an unknown card.`);
  prompt(`Player has: ${joinHand(playerHand)}. Total is ${total(playerHand)}`);
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

function total (cards) {
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

function findWinner (playerHand, dealerHand) {
  let playerTotal = total(playerHand);
  let dealerTotal = total(dealerHand);

  // Checking for busts
  if (checkBusted(playerTotal)) return 'Dealer';
  if (checkBusted(dealerTotal)) return 'Player';

  // Comparing scores
  if (playerTotal > dealerTotal) return 'Player';
  if (dealerTotal > playerTotal) return 'Dealer';

  return 'Tie';
}

function playerTurn (playerHand, dealerHand, deck) {

  while (true) {
    showHands(playerHand, dealerHand);

    let choice = getUserChoice();

    if (choice === 'hit' || choice === 'h') {
      playerHand.push(deal(deck));
      console.clear();
    }

    let busted = checkBusted(total(playerHand));

    if (choice === 'stay' || choice === 's') {
      prompt(`You chose to stay!`);
      break;
    } else if (busted) {
      prompt(`You busted! Your total was ${total(playerHand)}`);
      break;
    }
  }

  return playerHand;
}

function dealerTurn (dealerHand, deck) {
  while (total(dealerHand) < DEALER_STAY_NUMER) {
    dealerHand.push(deal(deck));
  }

  return dealerHand;
}

function game() {

  while (true) {
    let deck = initalizeDeck();

    let [ playerHand, dealerHand ] = dealStartingHand(deck);

    playerHand = playerTurn(playerHand, dealerHand, deck);

    // Checks to see if the player busted.
    // If player busted, the dealer is skipped
    if (!checkBusted(total(playerHand))) {
      dealerHand = dealerTurn(dealerHand, deck);
    }


    prompt(`Dealer has: ${joinHand(dealerHand)}. Total is ${total(dealerHand)}`);
    prompt(`Player has: ${joinHand(playerHand)}. Total is ${total(playerHand)}`);

    let winner = findWinner(playerHand, dealerHand);

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