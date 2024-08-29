const Player = require("./player");
const DOMController = require("./DOMController");
const Ship = require("./ship");
import css from "./style.css";

class Game {
  constructor() {
    this.player_1 = new Player();
    this.player_2 = new Player("cpu", 2);
    this.currentNum = Math.random() < 0.5 ? 1 : 2;
    this.currentPlayer = this.currentNum === 1 ? this.player_1 : this.player_2;
    this.nextPlayer = this.currentNum === 1 ? this.player_2 : this.player_1;
    this.display = new DOMController(this);
    this.display.setupNewGameBtn(this.setupNewGame);
    this.setupNewGame();
    this.changeTurn();
  }

  setupNewGame = () => {
    this.player_1 = new Player();
    this.player_2 = new Player("cpu", 2);
    this.player_1.gameBoard.placeShip(new Ship(3), [4, 4], [1, 0]);
    this.player_1.gameBoard.placeShip(new Ship(5), [0, 1], [0, 1]);
    this.player_2.gameBoard.placeShip(new Ship(5), [4, 4], [1, 0]);
    this.player_2.gameBoard.placeShip(new Ship(3), [0, 1], [0, 1]);
    this.display.createBoard(this.player_1);
    this.display.createBoard(this.player_2, 2);
  };
  changeTurn = () => {
    this.display.message("Current player: player " + this.currentNum);
    this.currentNum = this.currentNum === 1 ? 2 : 1;
    this.currentPlayer = this.currentNum === 1 ? this.player_1 : this.player_2;
    this.nextPlayer = this.currentNum === 1 ? this.player_2 : this.player_1;
    console.log("num: ", this.currentNum);
    console.log("cPlayer: ", this.currentPlayer);
    console.log("nPlayer: ", this.nextPlayer);
    if (this.currentPlayer.type === "cpu") {
      const move = this.cpuMove(this.currentPlayer);
      const square = this.display.getSquare(this.currentNum, move);
      console.log("move: ", move);
      console.log("square: ", square);
      square.click();
    }
  };
  // a player's move history is stored into the opponent's gameBoard
  cpuMove = (player) => {
    const getCoord = () => Math.floor(Math.random() * 8);
    let move = [getCoord(), getCoord()];
    while (player.gameBoard.searchHistory(move)) {
      move = [getCoord(), getCoord()];
    }
    return move;
  };
}

const game = new Game();
