//import { Ship } from "./ship";
const Ship = require("./ship");

class GameBoard {
  constructor() {
    this.board = this.setupBoard();
    this.ships = [];
    this.history = [];
  }
  resetBoard = () => {
    this.board = this.setupBoard();
    this.ships = [];
    this.history = [];
  };
  setupBoard = (size = 10) => {
    const board = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push({ hit: false, ship: null });
      }
      board.push(row);
    }
    return board;
  };

  placeShip = (ship, position, direction) => {
    this.ships.push(ship);
    for (let i = 0; i < ship.length; i++) {
      this.board[position[0]][position[1]].ship = ship;
      position.map((index, n) => (n += direction[index]));
      position[0] += direction[0];
      position[1] += direction[1];
    }
  };

  receiveAttack = (position) => {
    const [x, y] = position;
    let area = this.board[x][y];
    if (!area.hit) {
      if (area.ship) {
        area.hit = true;
        area.ship.hit();
        this.checkVictory();
      } else {
        this.history.push(position);
      }
    }
  };
  checkVictory = () => {
    const totHp = this.ships.reduce((tot, ship) => (tot += ship.hp), 0);
    return totHp > 0 ? false : true;
  };
}

module.exports = GameBoard;
