let ship = require("./ships");
const rules = require("./rules");
class board {
  #grid;
  #boats;
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
      boats.forEach((boat) => {
        array.push({ ship: new ship(boat), position: null });
      });
      return array;
    })();
  }
  get grid() {
    return this.#grid;
  }
  get boats() {
    return this.#boats;
  }
  placeShip(index, pos, dir) {
    if (this.#boats[index].position != null) {
      return "Ship already placed";
    }
    if (dir == "y") {
      let boat = this.boats[index].ship;
      if (
        pos.y + boat.size - 1 < 10 &&
        pos.x >= 0 &&
        pos.y >= 0 &&
        pos.x < 10 &&
        pos.y < 10
      ) {
        for (let i = pos.y; i < pos.y + boat.size; i++) {
          if (this.#grid[pos.x][i] == 1) {
            return "Can not overlap ships";
          }
        }
        for (let i = pos.y; i < pos.y + boat.size; i++) {
          this.#grid[pos.x][i] = 1;
        }
        this.#boats[index].position = {
          init: { x: pos.x, y: pos.y },
          end: { x: pos.x, y: pos.y + boat.size - 1 },
        };
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
        }
        this.#boats[index].position = {
          init: { x: pos.x, y: pos.y },
          end: { x: pos.x + boat.size - 1, y: pos.y },
        };
      }
    }
  }
}

module.exports = board;
