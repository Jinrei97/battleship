const Player = require("./player");
const DOMController = require("./DOMController");
const Ship = require("./ship");
import css from "./style.css";

class Game {
  constructor() {
    this.player_1 = new Player();
    this.player_2 = new Player("cpu", 2);
    this.currentPlayer = Math.random() < 0.5 ? 1 : 2;
    this.display = new DOMController(this);
    this.display.setupNewGameBtn(this.setupNewGame);
    this.setupNewGame();
    this.changeTurn();
  }

  setupNewGame = () => {
    this.player_1 = new Player();
    this.player_2 = new Player("cpu", 2);
    this.player_1.gameBoard.placeShip(new Ship(3), [4, 4], [1, 0]);
    this.player_1.gameBoard.placeShip(new Ship(3), [0, 1], [0, 1]);
    this.player_2.gameBoard.placeShip(new Ship(3), [4, 4], [1, 0]);
    this.player_2.gameBoard.placeShip(new Ship(3), [0, 1], [0, 1]);
    this.display.createBoard(this.player_1, 2);
    this.display.createBoard(this.player_2);
  };
  changeTurn = () => {
    this.display.message("Current player: player " + this.currentPlayer);
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
  };
  cpuMove = (player) => {
    const getCoord = Math.floor(Math.random() * 8);
    let move = [getCoord(), getCoord()];
    while (player.gameBoard.searchHistory(move)) {
      move = [getCoord(), getCoord()];
    }
    return move;
  };
}

const game = new Game();
