class DOMController {
  constructor() {
    this.board_1 = document.querySelector(".board_1");
    this.board_2 = document.querySelector(".board_2");
    this.newGameBtn = document.querySelector(".newGameBtn");
  }
  setupNewGameBtn = (callback) => {
    this.newGameBtn.addEventListener("click", callback);
  };
}

module.exports = DOMController;
