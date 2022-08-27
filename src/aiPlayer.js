let rules = require("./rules");

class aiPlayer {
  #grid;
  #lastMoves;
  #player;
  constructor(size, player) {
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
  }
}

module.exports = aiPlayer;
