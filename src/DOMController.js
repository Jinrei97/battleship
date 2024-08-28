class DOMController {
  constructor(game) {
    this.board_1 = document.querySelector(".board_1");
    this.board_2 = document.querySelector(".board_2");
    this.newGameBtn = document.querySelector(".newGameBtn");
    this.messageBoard = document.querySelector("textarea");
    this.game = game;
    console.log(this);
  }
  setupNewGameBtn = (callback) => {
    this.newGameBtn.addEventListener("click", () => {
      callback();
    });
  };
  message = (msg) => {
    this.messageBoard.textContent = msg;
  };

  createBoard = (player, playerNum = 1) => {
    const board = player.gameBoard.board;
    const divBoard = [];
    for (let i = 0; i < board.length; i++) {
      const row = document.createElement("div");
      row.classList.toggle("row");
      for (let j = 0; j < board[0].length; j++) {
        const square = document.createElement("div");
        square.classList = `square ${i}${j}`;
        if (board[i][j].ship) square.classList.toggle("ship");
        this.setupSquare(square, player, playerNum);
        row.appendChild(square);
      }
      divBoard.push(row);
    }
    if (playerNum === 1) {
      this.board_1.replaceChildren();
      divBoard.map((row) => this.board_1.appendChild(row));
    } else {
      this.board_2.replaceChildren();
      divBoard.map((row) => this.board_2.appendChild(row));
    }
  };
  setupSquare = (square, player) => {
    const [i, j] = [...square.classList[1]].map((val) => Number(val));
    const board = player.gameBoard.board;
    square.addEventListener("click", () => {
      if (
        !board[i][j].hit &&
        !player.gameBoard.searchHistory([i, j]) &&
        player.number === this.game.currentPlayer
      ) {
        player.gameBoard.receiveAttack([i, j]);
        if (board[i][j].hit && board[i][j].ship) square.classList.toggle("hit");
        if (board[i][j].hit && !board[i][j].ship)
          square.classList.toggle("miss");
        this.game.changeTurn();
      }
    });
  };
}

module.exports = DOMController;
