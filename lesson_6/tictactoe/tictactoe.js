const rlsync = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINS_NEEDED = 5;

const prompt = msg => {
  console.log(`>>> ${msg}`);
}

const initializeBoard = () =>{
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

const displayBoard= (board, playerWins, computerWins) => {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log(`Player wins: ${playerWins}`);
  console.log(`Computer wins: ${computerWins}`)

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

const boardFull = board => {
  return emptySquares(board).length === 0;
}
const detectWinner = board => {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

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
}

const someoneWon = board => {
  return !!detectWinner(board);
}

const emptySquares = board => {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

const joinOr = (board, delimiter = ',', joinWord = 'or' ) => {
  if (board.length === 0) return '';
  else if (board.length === 1) return `${board[0]}`;
  else if (board.length === 2) return `${board[0]} ${joinWord} ${board[1]}`;
  
  let allButLast = board.slice(0, board.length - 1);
  let lastNum = board[board.length -1];
  
  return `${allButLast.join(delimiter)} ${joinWord} ${lastNum}`;
}

const playerChoosesSquare = board => {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = rlsync.question().trim();

    if (emptySquares(board).includes(square)) break; // Break on valid choice

    prompt('Sorry, that is not a valid choice.');
  }

  board[square] = HUMAN_MARKER;
}

const computerChoosesSquare = board => {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

while (true) { // Outer Loop
  let board = initializeBoard();
  let playerWins = 0;
  let computerWins = 0;

  while (true) { // Match Loop
    
    while (true) { // Game Loop
      displayBoard(board, playerWins, computerWins);

      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
  
      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    }

  displayBoard(board, playerWins, computerWins);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }
  
  if (detectWinner(board) === 'Player') playerWins += 1;
  if (detectWinner(board) === 'Computer') computerWins += 1;
  
  if (playerWins === 5 || computerWins === 5) break;
  
  board = initializeBoard();  
  }
  
  prompt(`Play again? (y or n)`);
  let answer = rlsync.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt(`Thanks for playing Tic Tac Toe!`);