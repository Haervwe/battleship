let player = require("./player");

class game {
  #type;
  #player1;
  #player2;
  #currentPlayer;
  #defender;
  #winner;
  constructor(type, player1, player2 = "") {
    this.#type = type;
    this.#player1 = (() => {
      if (player1 == "") {
        return new player("Player 1");
      }
      return new player(player1);
    })();
    this.#player2 = (() => {
      if (this.type == "ai") {
        return new player("AI");
      } else {
        if (player1 == "") {
          return new player("Player 2");
        }
        return new player(player2);
      }
    })();
    this.#currentPlayer = this.#player1;
    this.#defender = this.#player2;
    this.#winner = null;
  }
  get type() {
    return this.#type;
  }
  get player1() {
    return this.#player1;
  }
  get player2() {
    return this.#player2;
  }
  get currentPlayer() {
    return this.#currentPlayer;
  }
  get player1name() {
    return this.#player1.name;
  }
  get player2name() {
    return this.#player2.name;
  }
  get winner() {
    return this.#winner;
  }
  nextPlayer() {
    if (this.#currentPlayer == this.#player1) {
      this.#currentPlayer = this.#player2;
    } else {
      this.#currentPlayer = this.#player1;
    }
  }

  turn(x = 0, y = 0) {
    if (
      this.#player1.board.allShipsPlaced() == false ||
      this.#player2.board.allShipsPlaced() == false
    ) {
      return "All ships must been placed before an attack";
    }
    if (this.#winner != null) {
      return "game already finished";
    }
    let result = this.#defender.board.recieveAttack(x, y);
    if (result != undefined) {
      return result;
    }
    if (this.#defender.board.isGameOver() == true) {
      this.#winner = `${this.#currentPlayer.name} WINS`;
      return true;
    }
    let temp = this.#currentPlayer;
    this.#currentPlayer = this.#defender;
    this.#defender = temp;
  }
}

module.exports = game;
