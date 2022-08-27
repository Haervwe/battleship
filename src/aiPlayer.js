const { size } = require("./rules");
let rules = require("./rules");

class aiPlayer {
  #grid;
  #lastMoves;
  #player;
  #oponent;
  #moveQueue;
  constructor(size, player, oponent) {
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
    this.#lastMoves = [];
    this.#player = player;
    this.#oponent = oponent;
    this.moveQueue = [];
  }
  #newAttackVector() {
    let x = Math.floor(Math.random() * (this.#grid.length - 1));
    let y = Math.floor(Math.random() * (this.#grid.length - 1));
    let result = { x: 0, y: 0 };
    if (this.#moveQueue.length != 0) {
      result = this.#moveQueue[0];
      this.#moveQueue.shift();
      return result;
    }
    if (x % 2 == 0) {
      result.y = Math.floor(y / 2) * 2;
    } else {
      result.y = Math.floor(y / 2) * 2 + 1;
    }
    if (y % 2 == 0) {
      result.x = Math.floor(y / 2) * 2;
    } else {
      result.x = Math.floor(y / 2) * 2 + 1;
    }
    return result;
  }
  play() {
    let coord = this.#newAttackVector();
    let check = () => {
      result = true;
      for (let i = 0; i < this.#lastMoves.length; i++) {
        if (
          (coord.x == this.#lastMoves[i].x &&
            coord.y == this.#lastMoves[i].y) ||
          coord.x < 0 ||
          coord.y < 0 ||
          coord.x >= this.#grid.length ||
          coord.y >= this.#grid.length
        ) {
          result = false;
        }
      }
      return result;
    };
    while (check == false) {
      coord = this.#newAttackVector();
    }
    let result = 0;
    if (this.#oponent.board.grid[coord.x][coord.y] == 1) {
      result = 1;
      if (this.#lastMoves[this.#lastMoves.length - 1].result == 1) {
        let xDiference =
          this.#lastMoves[this.#lastMoves.length - 1].x - coord.x;
        let yDiference =
          this.#lastMoves[this.#lastMoves.length - 1].y - coord.y;
        if (xDiference == 0) {
          if (yDiference < 0) {
            this.#moveQueue.push({ x: coord.x, y: coord.y + 1 });
          } else {
            this.#moveQueue.push({ x: coord.x, y: coord.y - 1 });
          }
        }
        if (yDiference == 0) {
          if (xDiference < 0) {
            this.#moveQueue.push({ x: coord.x + 1, y: coord.y });
          } else {
            this.#moveQueue.push({ x: coord.x - 1, y: coord.y });
          }
        }
      } else {
        let index = this.#moveQueue.length;
        switch (index) {
          case 0:
            if (this.#lastMoves[this.#lastMoves.length - 4].result == 1) {
              this.#moveQueue.push({ x: coord.x, y: coord.y - 1 });
            } else {
              this.moveQueue.push(
                { x: coord.x + 1, y: coord.y },
                { x: coord.x - 1, y: coord.y },
                { x: coord.x, y: coord.y + 1 },
                { x: coord.x, y: coord.y - 1 }
              );
            }

            break;
          case 1:
            this.moveQueue.push({ x: coord.x, y: coord.y + 1 });
            break;
          case 2:
            this.moveQueue.push({ x: coord.x - 1, y: coord.y });
            break;
          case 3:
            this.moveQueue.push({ x: coord.x + 1, y: coord.y });
            break;
          default:
            break;
        }
      }
    }
    this.#lastMoves.push({ x: coord.x, y: coord.y, result: result });
    return coord;
  }
}

module.exports = aiPlayer;
