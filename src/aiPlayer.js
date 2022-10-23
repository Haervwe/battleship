const ship = require("./ships");

class aiPlayer {
  #grid;
  #lastMoves;
  #player;
  #oponent;
  #prioMoves;
  #possibleMoves;
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
    this.#prioMoves = [];
    this.#possibleMoves = (() => {
      let movesArray = [];
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          movesArray.push({ x: i, y: j });
        }
      }
      return movesArray;
    })();
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
    if (this.#player.board.isGameOver() == true) {
      return "gameOver";
    }
    let i = Math.floor(Math.random() * this.#possibleMoves.length);
    let result;
    if (this.#prioMoves.length != 0) {
      result = this.#prioMoves[0];
      this.#prioMoves.shift();
      return result;
    }
    console.log(this.#possibleMoves[i], i, this.#possibleMoves.length);
    result = { x: this.#possibleMoves[i].x, y: this.#possibleMoves[i].y };
    this.#possibleMoves.splice(i, 1);
    return result;
  }

  play() {
    if (this.#player.board.isGameOver() == true) {
      return "gameOver";
    }
    let coord = this.newAttackVector();
    let result = 0;
    if (this.#oponent.board.grid[coord.x][coord.y] == 1) {
      result = 1;
      if (this.#lastMoves.length > 0) {
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

    return coord;
  }
}

module.exports = aiPlayer;
