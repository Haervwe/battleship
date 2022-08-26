let gameBoard = require("./gameBoard");
const rules = require("./rules");

class player {
  #name;
  constructor(name) {
    this.#name = name;
    this.board = new gameBoard(rules.size, rules.ships);
  }
  get name() {
    return this.#name;
  }
}

module.exports = player;
