const Ship = require("../ship");

beforeAll(() => {
  const ship = new Ship(3);
});

it("Hit", (ship) => {
  const currentHp = ship.hp;
  ship.hit();
  expect(ship.hp).toBe(currentHp - 1);
});
