const GameBoard = require("./gameBoard");

class Player {
  constructor(type = "human") {
    this.type = type;
    this.gameBoard = new GameBoard();
  }
}

module.exports = Player;
