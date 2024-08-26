//import { Ship } from "./ship";

class GameBoard {
  constructor() {
    this.board = this.setupBoard();
  }
  setupBoard = (size = 10) => {
    const board = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push(0);
      }
      board.push(row);
    }
    return board;
  };
}

module.exports = GameBoard;
