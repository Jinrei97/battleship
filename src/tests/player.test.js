const Player = require("../player");

it("creation", () => {
  const player = new Player();
  expect(!!player && !!player.gameBoard).toBe(true);
  expect(player.type).toBe("human");
});
