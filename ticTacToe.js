var prompt = require('prompt');

var board = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' '
};

var markPosition = function (position, piece) {
  board[position] = piece.toUpperCase();
};

var newBoard = function () {
  console.log(
    '\n' +
      ' ' + board[1] + ' 1  | ' + board[2] + '2  | ' + board[3] + '3' + '\n' +
      ' -----------------\n' +
      ' ' + board[4] + ' 4  | ' + board[5] + '5  | ' + board[6] + '6' + '\n' +
      ' -----------------\n' +
      ' ' + board[7] + ' 7  | ' + board[8] + '8  | ' + board[9] + '9' + '\n'
  );
};

newBoard();