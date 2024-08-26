const Ship = require("../ship");

const ship = new Ship(3);

it("Hit", () => {
  const currentHp = ship.hp;
  ship.hit();
  expect(ship.hp).toBe(currentHp - 1);
});
it("NotSunk", () => {
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});
it("Sunk", () => {
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
