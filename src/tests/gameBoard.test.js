const GameBoard = require("../gameBoard");
const Ship = require("../ship");

const gameBoard = new GameBoard();
afterEach(() => {
  gameBoard.resetBoard();
});

it("boardSize", () => {
  expect([gameBoard.board.length, gameBoard.board[0].length]).toEqual([10, 10]);
});

it("createShip", () => {
  expect(gameBoard.ships.length).toBe(0);
  gameBoard.placeShip(3, [2, 4], 1);
  expect(gameBoard.ships.length).toBe(1);
});
it("ship positioning", () => {
  const ship = new Ship(3);
  gameBoard.placeShip(ship, [3, 4], [1, 0]);
  expect([
    gameBoard.board[3][4].ship,
    gameBoard.board[4][4].ship,
    gameBoard.board[5][4].ship,
  ]).toEqual([ship, ship, ship]);
});

it("attackMiss", () => {
  gameBoard.receiveAttack([0, 0]);
  expect(gameBoard.board[1][0].hit).toBe(false);
});
it("attackHit", () => {
  const ship = new Ship(3);
  gameBoard.placeShip(ship, [3, 4], [1, 0]);
  gameBoard.receiveAttack([3, 4]);
  expect(gameBoard.board[3][4].hit).toBe(true);
});
it("history", () => {
  expect(gameBoard.history.length).toBe(0);
  gameBoard.receiveAttack([8, 7]);
  expect(gameBoard.history.length).toEqual(1);
});

it("victory check", () => {
  const ship = new Ship(3);
  gameBoard.placeShip(ship, [3, 4], [1, 0]);
  expect(gameBoard.ships[0].hp).toBe(3);
  expect(gameBoard.checkVictory()).toBe(false);
  gameBoard.receiveAttack([3, 4]);
  gameBoard.receiveAttack([4, 4]);
  gameBoard.receiveAttack([5, 4]);
  expect(gameBoard.checkVictory()).toBe(true);
});

it("historySearch", () => {
  gameBoard.receiveAttack([8, 7]);
  expect(gameBoard.searchHistory([0, 0])).toBe(undefined);
  expect(gameBoard.searchHistory([8, 7])).toBe("87");
});
