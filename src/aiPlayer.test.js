let aiPlayer = require("./aiPlayer");
let gameLogic = require("./gameLogic");
let rules = require("./rules");

it("checks ai player whole function, making two instances play against eachother, and wating to see if the match ends", () => {
  let game = new gameLogic("test", "ai1", "ai2");
  let ai1 = new aiPlayer(rules.size, game.player1, game.player2);
  ai1.placeShips();
  let ai2 = new aiPlayer(rules.size, game.player2, game.player1);
  ai2.placeShips();

  let stop = 0;
  let ai2play;
  let ai1play;
  while (game.winner == null && stop < 100) {
    ai1play = ai1.play();
    let test = game.turn(ai1play.x, ai1play.y);
    while (test != undefined) {
      if (game.winner != null) {
        break;
      }
      ai1play = ai1.play();
      test = game.turn(ai1play.x, ai1play.y);
    }
    if (game.winner != null) {
      break;
    }
    ai2play = ai2.play();

    let test2 = game.turn(ai2play.x, ai2play.y);
    while (test2 != undefined) {
      if (game.winner != null) {
        break;
      }
      ai2play = ai2.play();
      test2 = game.turn(ai2play.x, ai2play.y);
    }
    if (game.winner != null) {
      break;
    }
    stop++;
  }

  expect(typeof game.winner).toBe("string");
});
