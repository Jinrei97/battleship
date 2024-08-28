const Player = require("./player");
const DOMController = require("./DOMController");
const Ship = require("./ship");
import css from "./style.css";

class Game {
  constructor() {
    this.player_1 = new Player();
    this.player_2 = new Player();
    this.display = new DOMController();
    this.display.setupNewGameBtn(this.setupNewGame);
    this.setupNewGame();
  }
  setupNewGame = () => {
    this.player_1 = new Player();
    this.player_2 = new Player();
    this.player_1.gameBoard.placeShip(new Ship(3), [4, 4], [1, 0]);
    this.player_1.gameBoard.placeShip(new Ship(3), [0, 1], [0, 1]);
    this.player_2.gameBoard.placeShip(new Ship(3), [4, 4], [1, 0]);
    this.player_2.gameBoard.placeShip(new Ship(3), [0, 1], [0, 1]);
    this.display.renderBoard(this.player_1);
    this.display.renderBoard(this.player_2, 2);
  };
}

const game = new Game();
