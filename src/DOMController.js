class DOMController {
  constructor() {
    this.board_1 = document.querySelector(".board_1");
    this.board_2 = document.querySelector(".board_2");
    this.newGameBtn = document.querySelector(".newGameBtn");
    console.log(this);
  }
  setupNewGameBtn = (callback) => {
    this.newGameBtn.addEventListener("click", () => {
      callback();
    });
  };

  createBoard = (player, playerNum = 1) => {
    const board = player.gameBoard.board;
    const divBoard = [];
    for (let i = 0; i < board.length; i++) {
      const row = document.createElement("div");
      row.classList.toggle("row");
      for (let j = 0; j < board[0].length; j++) {
        const square = document.createElement("div");
        square.classList.toggle("square");
        if (board[i][j].hit && board[i][j].ship) square.classList.toggle("hit");
        if (board[i][j].hit && !board[i][j].ship)
          square.classList.toggle("miss");
        if (board[i][j].ship) square.classList.toggle("ship");
        square.addEventListener("click", () => {
          player.gameBoard.receiveAttack([i, j]);
          this.renderBoard(player, playerNum);
        });
        row.appendChild(square);
      }
      divBoard.push(row);
    }
    return divBoard;
  };
  renderBoard = (player, playerNum = 1) => {
    const playerBoard = this.createBoard(player, playerNum);
    if (playerNum === 1) {
      this.board_1.replaceChildren();
      playerBoard.map((row) => this.board_1.appendChild(row));
    } else {
      this.board_2.replaceChildren();
      playerBoard.map((row) => this.board_2.appendChild(row));
    }
  };
}

module.exports = DOMController;
