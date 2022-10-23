const ship = require("./ships");

class aiPlayer {
  #grid;
  #lastMoves;
  #player;
  #moves;
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
    this.#moves = (() => {
      let movesArray = [];
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          if (i % 2 == 0 && j % 2 != 0) {
            movesArray.push({ x: i, y: j });
          }
          if (i % 2 != 0 && j % 2 == 0) {
            movesArray.push({ x: i, y: j });
          }
        }
      }
      return movesArray;
    })();
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
    console.log(this.#moves);
    if (this.#player.board.isGameOver() == true) {
      return "gameOver";
    }
    let i;
    if (this.#moves.length != 0) {
      let temp = Math.floor(Math.random() * this.#moves.length);
      if (temp == this.#moves.length) {
        temp = temp - 1;
      }
      i = (() => {
        for (let j = 0; j < this.#possibleMoves.length; j++) {
          if (
            this.#possibleMoves[j].x == this.#moves[temp].x &&
            this.#possibleMoves[j].y == this.#moves[temp].y
          ) {
            return j;
          }
        }
      })();
      if (i == undefined) {
        i = Math.floor(Math.random() * this.#possibleMoves.length);
        if (i == this.#possibleMoves.length) {
          i = i - 1;
        }
        if (i == -1) {
          return "error";
        }
      }
    } else {
      i = Math.floor(Math.random() * this.#possibleMoves.length);
      if (i == this.#possibleMoves.length) {
        i = i - 1;
      }
      if (i == -1) {
        return "error";
      }
    }
    console.log(i);
    let result;
    if (this.#prioMoves.length != 0) {
      if (
        this.#prioMoves[0].x < 0 ||
        this.#prioMoves[0].x >= this.#grid.length ||
        this.#prioMoves[0].y < 0 ||
        this.#prioMoves[0].y >= this.#grid.length
      ) {
        result = { x: this.#possibleMoves[i].x, y: this.#possibleMoves[i].y };
        this.#possibleMoves.splice(i, 1);
        this.#prioMoves.shift();
        return result;
      } else {
        result = this.#prioMoves[0];
        let index = (() => {
          for (let j = 0; j < this.#possibleMoves.length; j++) {
            if (
              this.#possibleMoves[j].x == result.x &&
              this.#possibleMoves[j].y == result.y
            ) {
              return j;
            }
          }
        })();
        if (index == undefined) {
          this.#prioMoves.shift();
          return this.newAttackVector();
        }
        this.#possibleMoves.splice(index, 1);
        this.#prioMoves.shift();
        return result;
      }
    } else {
      result = { x: this.#possibleMoves[i].x, y: this.#possibleMoves[i].y };
      this.#possibleMoves.splice(i, 1);
      return result;
    }
  }

  play() {
    if (this.#player.board.isGameOver() == true) {
      return "gameOver";
    }
    let coord = this.newAttackVector();
    let result = 0;
    console.log(this.#lastMoves, this.#prioMoves, coord);
    if (this.#oponent.board.grid[coord.x][coord.y] == 1) {
      result = 1;
      let index = this.#prioMoves.length;
      if (index == 0 && this.#lastMoves[0] === undefined) {
        this.#prioMoves.push(
          { x: coord.x + 1, y: coord.y },
          { x: coord.x - 1, y: coord.y },
          { x: coord.x, y: coord.y + 1 },
          { x: coord.x, y: coord.y - 1 }
        );
      } else if (this.#lastMoves[0].result == 0) {
        this.#prioMoves.push(
          { x: coord.x + 1, y: coord.y },
          { x: coord.x - 1, y: coord.y },
          { x: coord.x, y: coord.y + 1 },
          { x: coord.x, y: coord.y - 1 }
        );
      } else {
        if (this.#lastMoves[0].result == 1) {
          if (
            coord.x > this.#lastMoves[0].x &&
            coord.y == this.#lastMoves[0].y
          ) {
            this.#prioMoves.unshift({ x: coord.x + 1, y: coord.y });
            this.#prioMoves.unshift({ x: coord.x - 1, y: coord.y });
          }
          if (
            coord.x < this.#lastMoves[0].x &&
            coord.y == this.#lastMoves[0].y
          ) {
            this.#prioMoves.unshift({ x: coord.x + 1, y: coord.y });
            this.#prioMoves.unshift({ x: coord.x - 1, y: coord.y });
          }
          if (
            coord.x == this.#lastMoves[0].x &&
            coord.y > this.#lastMoves[0].y
          ) {
            this.#prioMoves.unshift({ x: coord.x, y: coord.y - 1 });
            this.#prioMoves.unshift({ x: coord.x, y: coord.y + 1 });
          }
          if (
            coord.x == this.#lastMoves[0].x &&
            coord.y < this.#lastMoves[0].y
          ) {
            this.#prioMoves.unshift({ x: coord.x, y: coord.y + 1 });
            this.#prioMoves.unshift({ x: coord.x, y: coord.y - 1 });
          }
        }
      }
    }
    this.#lastMoves.unshift({ x: coord.x, y: coord.y, result: result });

    return coord;
  }
}

module.exports = aiPlayer;
