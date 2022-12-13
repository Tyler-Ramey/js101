const rlsync = require("readline-sync");
const MESSAGES = require("./ttt.json");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINS_NEEDED = 5;
const FIRST_PLAYER = 'choose'; // Valid options are 'player', 'computer', 'choose'
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

const prompt = msg => {
  console.log(`>>> ${MESSAGES[msg]}`);
};

const initializeBoard = () => {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
};

const displayBoard = (board, playerWins, computerWins) => {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log(`Player wins: ${playerWins}`);
  console.log(`Computer wins: ${computerWins}`);

  console.log('\n     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |\n');

};

const detectWinner = board => {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
};

const someoneWon = board => {
  return !!detectWinner(board);
};

const emptySquares = board => {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
};

const boardFull = board => {
  return emptySquares(board).length === 0;
};

const joinOr = (board, delimiter = ',', joinWord = 'or' ) => {
  if (board.length === 0) return '';
  else if (board.length === 1) return `${board[0]}`;
  else if (board.length === 2) return `${board[0]} ${joinWord} ${board[1]}`;

  let allButLast = board.slice(0, board.length - 1);
  let lastNum = board[board.length - 1];

  return `${allButLast.join(delimiter)} ${joinWord} ${lastNum}`;
};

const findAtRiskSquare = (line, board, marker) => {
  let markersInLine = line.map(key => board[key]);

  // Checks line to determine if line contains two Human markers and then finds
  // an empty square, if any
  if (markersInLine.filter(val => val === marker).length === 2) {
    let indexOfEmptySq = markersInLine.indexOf(INITIAL_MARKER); // Returns -1 if not found

    if (indexOfEmptySq >= 0) return line[indexOfEmptySq];
  }

  return null;
};

const playerChoosesSquare = board => {
  let square;

  while (true) {
    console.log(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = rlsync.question().trim();

    if (emptySquares(board).includes(square)) break; // Break on valid choice

    prompt('invalidSquare');
  }

  board[square] = HUMAN_MARKER;
};

const checkComputerOptions = (board, marker) => {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index += 1) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, marker);
    if (square !== null) break;
  }

  return square;
};

const computerChoosesSquare = board => {
  let square;

  // Offensive check
  square = checkComputerOptions(board, COMPUTER_MARKER);

  //Defensive check
  if (!square) {
    square = checkComputerOptions(board, HUMAN_MARKER);
  }

  //Default space
  if (!square) {
    if (board[5] === ' ') square = 5;
  }

  //Random
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
};

const chooseSquare = (board, currentPlayer) => {
  switch (currentPlayer) {
    case 'Player': return playerChoosesSquare(board);
    case 'Computer': return computerChoosesSquare(board);
  }

  return null;
};

const alternatePlayer = currentPlayer => {
  switch (currentPlayer) {
    case 'Player': return 'Computer';
    case 'Computer': return 'Player';
  }

  return null;
};

const getFirstPlayer = () => {
  switch (FIRST_PLAYER) {
    case 'player': return 'Player';
    case 'computer': return 'Computer';
  }

  while (true) {
    prompt('goFirst');
    let response = rlsync.question().toLowerCase();

    if (response === 'y' || response === 'yes') {
      return 'Player';
    } else if (response === 'n' || response === 'no') {
      return 'Computer';
    } else {
      prompt('invalidAnswer');
    }
  }
};

const getPlayerContinueChoice = () => {
  prompt('playAgain');
  let answer = rlsync.question().toLowerCase();
  while (!['y', 'yes', 'n', 'no'].includes(answer)) {
    prompt('invalidAnswer');
    answer = rlsync.question().toLowerCase();
  }
  
  return answer;
};

prompt('welcome');

while (true) { // Outer Loop
  let board;
  let playerWins = 0;
  let computerWins = 0;

  while (true) { // Match Loop
    board = initializeBoard();
    let currentPlayer = getFirstPlayer();

    while (true) { // Game Loop
      displayBoard(board, playerWins, computerWins);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board, playerWins, computerWins);

    if (someoneWon(board)) {
      console.log(`${detectWinner(board)} won that round!`);
    } else {
      prompt('tie');
    }
    if (detectWinner(board) === 'Player') playerWins += 1;
    if (detectWinner(board) === 'Computer') computerWins += 1;
    
    rlsync.keyInPause();  // Pause on round in until user hits any key
    console.clear();

    if (playerWins === WINS_NEEDED || computerWins === WINS_NEEDED) break;
  }
  
  displayBoard(board, playerWins, computerWins);
  
  console.log(`${detectWinner(board)} won the game!`);
  
  let answer = getPlayerContinueChoice();

  if (answer === 'no' || answer === 'n') break;
}

prompt('exit');