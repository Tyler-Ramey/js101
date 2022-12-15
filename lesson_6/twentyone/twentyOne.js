const rlsync = require("readline-sync");

const DECK = [
  ['H', '2'], ['H', '3'], ['H', '4'], ['H', '5'], ['H', '6'],   // Hearts
  ['H', '7'], ['H', '8'], ['H', '9'], ['H', '10'], ['H', 'Jack'],  // Hearts
  ['H', 'Queen'], ['H', 'King'], ['H', 'Ace'],                           // Hearts

  ['D', '2'], ['D', '3'], ['D', '4'], ['D', '5'], ['D', '6'],   // Diamonds
  ['D', '7'], ['D', '8'], ['D', '9'], ['D', '10'], ['D', 'Jack'],  // Diamonds
  ['D', 'Queen'], ['D', 'King'], ['D', 'Ace'],                           // Diamonds

  ['S', '2'], ['S', '3'], ['S', '4'], ['S', '5'], ['S', '6'],   // Spades
  ['S', '7'], ['S', '8'], ['S', '9'], ['S', '10'], ['S', 'Jack'],  // Spades
  ['S', 'Queen'], ['S', 'King'], ['S', 'Ace'],                           // Spades

  ['C', '2'], ['C', '3'], ['C', '4'], ['C', '5'], ['C', '6'],   // Clubs
  ['C', '7'], ['C', '8'], ['C', '9'], ['C', '10'], ['C', 'Jack'],  // Clubs
  ['C', 'Queen'], ['C', 'King'], ['C', 'Ace'],                           // Clubs
];

const WINNING_NUMBER = 21;

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

function shuffle (deckCopy) {
  for (let idx = deckCopy.length - 1; idx > 0; idx--) {
    let otherIdx = Math.floor(Math.random() * (idx + 1)); // 0 to idx
    [deckCopy[idx], deckCopy[otherIdx]] = [deckCopy[otherIdx], deckCopy[idx]]; // swap elements
  }
}

function deal (deckCopy) {
  let card = deckCopy.shift();
  return card;
}

function dealStartingHand (deckCopy) {
  let playerHand = [];
  let dealerHand = [];

  for (let runs = 0; runs < 2; runs++) playerHand.push(deal(deckCopy));
  for (let runs = 0; runs < 2; runs++) dealerHand.push(deal(deckCopy));

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

function playerTurn (playerHand, dealerHand, deckCopy) {
  let dealerCard = dealerHand[0][1];

  while (true) {
    prompt(`Dealer has: ${dealerCard} and an unknown card.`);
    prompt(`Player has: ${joinHand(playerHand)}. Total is ${total(playerHand)}`);

    let choice = getUserChoice();

    if (choice === 'hit' || choice === 'h') {
      playerHand.push(deal(deckCopy));
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

function dealerTurn (dealerHand, deckCopy) {
  while (total(dealerHand) < 17) {
    dealerHand.push(deal(deckCopy));
  }
  
  return dealerHand;
}

function game() {
  
  while (true) {
    let deckCopy = JSON.parse(JSON.stringify(DECK));
  
    shuffle(deckCopy);
  
    let [ playerHand, dealerHand ] = dealStartingHand(deckCopy);
  
    playerHand = playerTurn(playerHand, dealerHand, deckCopy);
    
    //Checks to see if the player busted. If player busted, the dealer is skipped
    if (!checkBusted(total(playerHand))) {
      dealerHand = dealerTurn(dealerHand, deckCopy);
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