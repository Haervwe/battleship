const ship = require("./ships");

class aiPlayer {
  #grid;
  #lastMoves;
  #player;
  #oponent;
  #moveQueue;
  #prioMoves;
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
    this.#moveQueue = (() => {
      let initMoves = [];
      for (let i = size - 1; i < size; i++) {
        let x = i;
        for (let j = Math.floor(size / 2); j < Math.floor(size / 2); j++) {
          let y = j;
          if (x & (2 == 0)) {
            initMoves.push({ x: x, y: y * 2 });
          } else {
          }
          initMoves.push({ x: x, y: y * 2 + 1 });
        }
      }
      return initMoves;
    })();
    this.#prioMoves = [];
  }
  placeShips() {
    let dir = ["x", "y"];
    for (let i = 0; i < this.#player.board.boats.length; i++) {
      while (this.#player.board.boats[i].placed == false) {
        let x = Math.floor(Math.random() * this.#grid.length);
        let y = Math.floor(Math.random() * this.#grid.length);
        let z = Math.floor(Math.random() * 2);
        this.#player.board.placeShip(i, { x: x, y: y }, dir[z]);
      }
    }
  }
  newAttackVector() {
    let x = Math.floor(Math.random() * this.#grid.length);
    let y = Math.floor(Math.random() * this.#grid.length);
    let result = { x: 0, y: 0 };

    if (this.#prioMoves.length != 0) {
      result = this.#prioMoves[0];
      this.#prioMoves.shift();
      return result;
    }
    if (this.#moveQueue.length != 0) {
      result = this.#moveQueue[0];
      this.#moveQueue.shift();
      return result;
    }
    return { x: x, y: y };
  }
  play() {
    let coord = this.newAttackVector();
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
      console.log(check);
      coord = this.newAttackVector();
    }
    let result = 0;
    console.log(
      "result:",
      coord.x,
      coord.y,
      "Queue:",
      this.#moveQueue,
      "Prio;",
      this.#prioMoves
    );
    if (this.#oponent.board.grid[coord.x][coord.y] == 1) {
      result = 1;
      if (this.#lastMoves.length > 1) {
        if (this.#lastMoves[this.#lastMoves.length - 1].result == 1) {
          let xDiference =
            this.#lastMoves[this.#lastMoves.length - 1].x - coord.x;
          let yDiference =
            this.#lastMoves[this.#lastMoves.length - 1].y - coord.y;
          if (xDiference == 0) {
            if (yDiference < 0) {
              this.#prioMoves.push({ x: coord.x, y: coord.y - 1 });
            } else {
              this.#prioMoves.push({ x: coord.x, y: coord.y + 1 });
            }
          }
          if (yDiference == 0) {
            if (xDiference < 0) {
              this.#prioMoves.push({ x: coord.x - 1, y: coord.y });
            } else {
              this.#prioMoves.push({ x: coord.x + 1, y: coord.y });
            }
          }
        }
      } else {
        let index = this.#prioMoves.length;
        switch (index) {
          case 0:
            this.#prioMoves.push(
              { x: coord.x + 1, y: coord.y },
              { x: coord.x - 1, y: coord.y },
              { x: coord.x, y: coord.y + 1 },
              { x: coord.x, y: coord.y - 1 }
            );
            break;
          case 1:
            this.#prioMoves.push({ x: coord.x, y: coord.y + 1 });
            break;
          case 2:
            this.#prioMoves.push({ x: coord.x - 1, y: coord.y });
            break;
          case 3:
            this.#prioMoves.push({ x: coord.x + 1, y: coord.y });
            break;
          default:
            if (this.#prioMoves.length > 4) {
              if (
                this.#prioMoves[this.#prioMoves.length - 4][coord.x][coord.y] ==
                1
              ) {
                this.#prioMoves.push({ x: coord.x, y: coord.y - 1 });
              }
            } else break;
        }
      }
    }
    this.#lastMoves.push({ x: coord.x, y: coord.y, result: result });
    console.log(
      "result:",
      coord.x,
      coord.y,
      "Queue:",
      this.#moveQueue,
      "Prio;",
      this.#prioMoves,
      "last moves",
      this.#lastMoves
    );
    return coord;
  }
}

module.exports = aiPlayer;
