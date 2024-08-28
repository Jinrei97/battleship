const GameBoard = require("./gameBoard");

class Player {
  constructor(type = "human", number = 1) {
    this.type = type;
    this.gameBoard = new GameBoard();
    this.number = number;
  }
}

module.exports = Player;
