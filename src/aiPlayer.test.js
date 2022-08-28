let aiPlayer = require("./aiPlayer");
let gameLogic = require("./gameLogic");
let rules = require("./rules");

it("checks ai player whole function, making two instances play against eachother, and wating to see if the match ends", () => {
  let game = new gameLogic("test", "ai1", "ai2");
  let ai1 = new aiPlayer(rules.size, game.player1, game.player2);
  ai1.placeShips();
  let ai2 = new aiPlayer(rules.size, game.player2, game.player1);
  ai2.placeShips();
  console.log(game.player2.board.grid, game.winner);
  let stop = 0;
  while (game.winner == null && stop < 100) {
    let ai1play = ai1.play();
    let test = game.turn(ai1play.x, ai1play.y);
    while (test != undefined) {
      ai1play = ai1.play();
      test = game.turn(ai1play.x, ai1play.y);
    }
    if (game.winner != null) {
      break;
    }
    let ai2play = ai2.play();
    let test2 = game.turn(ai2play.x, ai2play.y);
    while (test2 != undefined) {
      ai2play = ai2.play();
      test2 = game.turn(ai2play.x, ai2play.y);
    }
    if (game.winner != null) {
      break;
    }
    stop++;
  }
  console.log(game.player2.board.grid, game.winner);
  expect(typeof game.winner).toBe("string");
});