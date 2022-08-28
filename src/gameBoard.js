let ship = require("./ships");
class board {
  #grid;
  #boats;
  #positions;
  constructor(size, boats) {
    if (size < 1 || !Array.isArray(boats)) {
      return;
    }
    this.#grid = (() => {
      let newGrid = [];
      for (let i = 0; i < size; i++) {
        let array = [];
        for (let j = 0; j < size; j++) {
          array.push(0);
        }
        newGrid.push(array);
      }
      return newGrid;
    })();
    this.#boats = (() => {
      let array = [];
      boats.forEach((boat, i) => {
        array.push({
          ship: new ship(boat),
          placed: false,
        });
      });
      return array;
    })();
    this.#positions = [];
  }
  get grid() {
    return this.#grid;
  }
  get boats() {
    return this.#boats;
  }
  get positions() {
    return this.#positions;
  }
  allShipsPlaced() {
    let result = true;
    this.#boats.forEach((boat) => {
      if (boat.placed == false) {
        result = false;
      }
    });
    return result;
  }
  placeShip(index, pos, dir) {
    if (this.#boats[index].placed != false) {
      return "Ship already placed";
    }
    if (dir == "y") {
      let boat = this.boats[index].ship;
      if (
        pos.y + boat.size - 1 < this.#grid.length &&
        pos.x >= 0 &&
        pos.y >= 0 &&
        pos.x < this.#grid.length &&
        pos.y < this.#grid.length
      ) {
        for (let i = pos.y; i < pos.y + boat.size; i++) {
          if (this.#grid[pos.x][i] == 1) {
            return "Can not overlap ships";
          }
        }
        for (let i = pos.y; i < pos.y + boat.size; i++) {
          this.#grid[pos.x][i] = 1;
          this.#positions.push({
            cords: { x: pos.x, y: i },
            shipIndex: index,
            shipAtackVector: i - pos.y,
          });
        }
        this.#boats[index].placed = true;
      }
    }
    if (dir == "x") {
      let boat = this.boats[index].ship;
      if (
        pos.x + boat.size - 1 < 10 &&
        pos.x >= 0 &&
        pos.y >= 0 &&
        pos.x < 10 &&
        pos.y < 10
      ) {
        for (let i = pos.x; i < pos.x + boat.size; i++) {
          if (this.#grid[i][pos.y] == 1) {
            return "Can not overlap ships";
          }
        }
        for (let i = pos.x; i < pos.x + boat.size; i++) {
          this.#grid[i][pos.y] = 1;
          this.#positions.push({
            cords: { x: i, y: pos.y },
            shipIndex: index,
            shipAtackVector: i - pos.x,
          });
        }
        this.#boats[index].placed = true;
      }
    }
  }
  recieveAttack(x, y) {
    if (x < 0 || x > 9 || y < 0 || y > 9) {
      return "Atack out of range";
    }
    if (this.#grid[x][y] == 2 || this.#grid[x][y] == 3) {
      return "Attack already made";
    }
    if (this.#grid[x][y] == 0) {
      this.#grid[x][y] = 3;
      return;
    }
    for (let i = 0; i < this.#positions.length; i++) {
      if (x == this.#positions[i].cords.x && y == this.#positions[i].cords.y) {
        this.#grid[x][y] = 2;
        let boat = this.#boats[this.#positions[i].shipIndex].ship;
        boat.shot(this.#positions[i].shipAtackVector);
      }
    }
  }
  isGameOver() {
    let result = true;
    this.#boats.forEach((boat) => {
      if (boat.ship.floats == true) {
        result = false;
      }
    });
    return result;
  }
}

module.exports = board;
