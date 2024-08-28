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

  createBoard = (board) => {
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
        row.appendChild(square);
      }
      divBoard.push(row);
    }
    return divBoard;
  };
  renderBoard = (player_1, player_2) => {
    const player_1_board = this.createBoard(player_1.gameBoard.board);
    const player_2_board = this.createBoard(player_2.gameBoard.board);
    this.board_1.replaceChildren();
    this.board_2.replaceChildren();
    player_1_board.map((row) => this.board_1.appendChild(row));
    player_2_board.map((row) => this.board_2.appendChild(row));
  };
}

module.exports = DOMController;
