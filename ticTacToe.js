let prompt = require('prompt');

let board = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9'
};

var markPosition = function (position, piece) {
  board[position] = piece.toUpperCase(); // set the piece to be the value of the position that the user inputs.
}; // need to mark the positions somehow?

let newBoard = function () { //depending on what the board is, it'll create a board with the keys in the object of board.
  console.log(
    '\n' +
      ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
      ' ----------\n' +
      ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
      ' ----------\n' +
      ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n'
  ); //create a board using keys in board object
};

let turn = function(player) {
  console.log('Your turn to play' + player);
}; // establish if turn is X or O, if turn is X, mark the position that player X inputs
// then change the turn to 'O' player and update board.

newBoard();