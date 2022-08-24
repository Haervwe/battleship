let board = require("./gameBoard");
const rules = require("./rules");
const ship = require("./ships");

// gameboadClass tests

it("check grid size", () => {
  expect(new board(rules.size, rules.ships).grid).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

it("check gameboard ship creation whithout placement", () => {
  let test = new board(rules.size, rules.ships);
  rules.ships.forEach((boat, i) => {
    expect(test.boats[i].ship instanceof ship).toBe(true);
  });
});

it("check place ship with large ship 5 pos 3/3 direction y", () => {
  let test = new board(rules.size, rules.ships);
  test.placeShip(0, { x: 3, y: 3 }, "y");
  expect(test.grid).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});
it("check place ship with large ship 5 pos 3/3 direction x", () => {
  let test = new board(rules.size, rules.ships);
  test.placeShip(0, { x: 3, y: 3 }, "x");
  expect(test.grid).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

it("check place all ships with no colisions", () => {
  let test = new board(rules.size, rules.ships);
  test.placeShip(0, { x: 3, y: 3 }, "x");
  test.placeShip(1, { x: 0, y: 0 }, "y");
  test.placeShip(2, { x: 3, y: 5 }, "x");
  test.placeShip(3, { x: 2, y: 6 }, "y");
  test.placeShip(4, { x: 9, y: 8 }, "y");
  expect(test.grid).toStrictEqual([
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  ]);
});

it("check place ship outside the grid axis x", () => {
  let test = new board(rules.size, rules.ships);
  test.placeShip(0, { x: 8, y: 3 }, "x");
  expect(test.grid).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

it("check place ship outside the grid axis y", () => {
  let test = new board(rules.size, rules.ships);
  test.placeShip(0, { x: 8, y: 8 }, "y");
  expect(test.grid).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

it("checks place ship in case of colitions", () => {
  let test = new board(rules.size, rules.ships);
  test.placeShip(0, { x: 3, y: 3 }, "x");
  expect(test.placeShip(2, { x: 5, y: 3 }, "x")).toBe("Can not overlap ships");
});

it("check place ship position mark", () => {
  let test = new board(rules.size, rules.ships);
  test.placeShip(0, { x: 3, y: 3 }, "x");
  expect(test.boats[0].position).toStrictEqual({
    init: { x: 3, y: 3 },
    end: { x: 7, y: 3 },
  });
});

it("check place ship for duplicate ship placement", () => {
  let test = new board(rules.size, rules.ships);
  test.placeShip(0, { x: 3, y: 3 }, "x");
  expect(test.placeShip(0, { x: 2, y: 2 }, "x")).toBe("Ship already placed");
});
