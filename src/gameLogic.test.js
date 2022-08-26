let game = require("./gameLogic");
function CompleteGame(test) {
  test.player1.board.placeShip(0, { x: 3, y: 3 }, "x");
  test.player1.board.placeShip(1, { x: 0, y: 0 }, "y");
  test.player1.board.placeShip(2, { x: 3, y: 5 }, "x");
  test.player1.board.placeShip(3, { x: 2, y: 6 }, "y");
  test.player1.board.placeShip(4, { x: 9, y: 8 }, "y");
  test.player2.board.placeShip(0, { x: 3, y: 3 }, "x");
  test.player2.board.placeShip(1, { x: 0, y: 0 }, "y");
  test.player2.board.placeShip(2, { x: 3, y: 5 }, "x");
  test.player2.board.placeShip(3, { x: 2, y: 6 }, "y");
  test.player2.board.placeShip(4, { x: 9, y: 8 }, "y");
  test.turn(3, 3);
  test.turn(3, 3);
  test.turn(4, 3);
  test.turn(4, 3);
  test.turn(5, 3);
  test.turn(5, 3);
  test.turn(6, 3);
  test.turn(6, 3);
  test.turn(7, 3);
  test.turn(7, 3);
  test.turn(0, 0);
  test.turn(0, 0);
  test.turn(0, 1);
  test.turn(0, 1);
  test.turn(0, 2);
  test.turn(0, 2);
  test.turn(0, 3);
  test.turn(0, 3);
  test.turn(3, 5);
  test.turn(3, 5);
  test.turn(4, 5);
  test.turn(4, 5);
  test.turn(5, 5);
  test.turn(5, 5);
  test.turn(2, 6);
  test.turn(2, 6);
  test.turn(2, 7);
  test.turn(2, 7);
  test.turn(2, 8);
  test.turn(2, 8);
  test.turn(9, 8);
  test.turn(9, 8);
}
function placeAllShips(test) {
  test.player1.board.placeShip(0, { x: 3, y: 3 }, "x");
  test.player1.board.placeShip(1, { x: 0, y: 0 }, "y");
  test.player1.board.placeShip(2, { x: 3, y: 5 }, "x");
  test.player1.board.placeShip(3, { x: 2, y: 6 }, "y");
  test.player1.board.placeShip(4, { x: 9, y: 8 }, "y");
  test.player2.board.placeShip(0, { x: 3, y: 3 }, "x");
  test.player2.board.placeShip(1, { x: 0, y: 0 }, "y");
  test.player2.board.placeShip(2, { x: 3, y: 5 }, "x");
  test.player2.board.placeShip(3, { x: 2, y: 6 }, "y");
  test.player2.board.placeShip(4, { x: 9, y: 8 }, "y");
}

it("game logic check names for 2 human players", () => {
  let test = new game("human", "Juan", "Pedro");
  expect(test.player1name).toBe("Juan");
  expect(test.player2name).toBe("Pedro");
});

it("game logic check names for human vs ai", () => {
  let test = new game("ai", "Juan");
  expect(test.player1name).toBe("Juan");
  expect(test.player2name).toBe("AI");
});

it("test if a invalid move returns an error and dosnt hange the current player", () => {
  let test = new game("human", "Juan", "Pedro");
  CompleteGame(test);
  test.turn(9, 9);
  test.turn(10, 10);
  expect(typeof test.turn(10, 10)).toBe("string");
});

it("check if last hit returns the winner (Juan)", () => {
  let test = new game("human", "Juan", "Pedro");
  CompleteGame(test);
  test.turn(9, 9);
  expect(test.winner).toBe("Juan WINS");
});

it("check if last hit returns the winner (Pedro)", () => {
  let test = new game("human", "Juan", "Pedro");
  CompleteGame(test);
  test.turn(1, 9);
  test.turn(9, 9);
  expect(test.winner).toBe("Pedro WINS");
});

it("check if turns return error when ships miss placement", () => {
  let test = new game("human", "Juan", "Pedro");
  expect(test.turn(9, 9)).toBe("All ships must been placed before an attack");
});
