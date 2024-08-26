class Ship {
  constructor(length) {
    this.length = length;
    this.hp = length;
  }
  hit = () => {
    this.hp -= 1;
    this.isSunk();
  };
  isSunk = () => {
    return this.hp > 0 ? false : true;
  };
}

module.exports = Ship;
