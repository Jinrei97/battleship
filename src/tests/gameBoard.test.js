const GameBoard = require("../gameBoard");

const gameBoard = new GameBoard();

it("boardSize", () => {
  expect([gameBoard.board.length, gameBoard.board[0].length]).toEqual([10, 10]);
});
