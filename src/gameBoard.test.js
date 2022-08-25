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

it("check place ship placed mark", () => {
  let test = new board(rules.size, rules.ships);
  test.placeShip(0, { x: 3, y: 3 }, "x");
  expect(test.boats[0].placed).toBe(true);
});

it("check postions array after placing one ship", () => {
  let test = new board(rules.size, rules.ships);
  test.placeShip(0, { x: 3, y: 3 }, "x");
  expect(test.positions).toStrictEqual([
    {
      cords: { x: 3, y: 3 },
      shipIndex: 0,
      shipAtackVector: 0,
    },
    {
      cords: { x: 4, y: 3 },
      shipIndex: 0,
      shipAtackVector: 1,
    },
    {
      cords: { x: 5, y: 3 },
      shipIndex: 0,
      shipAtackVector: 2,
    },
    {
      cords: { x: 6, y: 3 },
      shipIndex: 0,
      shipAtackVector: 3,
    },
    {
      cords: { x: 7, y: 3 },
      shipIndex: 0,
      shipAtackVector: 4,
    },
  ]);
});

it("check place ship for duplicate ship placement", () => {
  let test = new board(rules.size, rules.ships);
  test.placeShip(0, { x: 3, y: 3 }, "x");
  expect(test.placeShip(0, { x: 2, y: 2 }, "x")).toBe("Ship already placed");
});

it("check recieve attack on valid coordinates, hitting water", () => {
  let test = new board(rules.size, rules.ships);
  test.recieveAttack(3, 3);
  expect(test.grid).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

it("check recieve attack on invalid coordinates", () => {
  let test = new board(rules.size, rules.ships);
  expect(test.recieveAttack(10, 3)).toBe("Atack out of range");
});

it("check recieve attack on valid coordinates repeating shot", () => {
  let test = new board(rules.size, rules.ships);
  test.recieveAttack(3, 3);
  expect(test.recieveAttack(3, 3)).toBe("Attack already made");
});

it("check recieve attack on valid coordinates repeating shot", () => {
  let test = new board(rules.size, rules.ships);
  test.recieveAttack(3, 3);
  expect(test.recieveAttack(3, 3)).toBe("Attack already made");
});

it("check attack on ship grid result", () => {
  let test = new board(rules.size, rules.ships);
  test.placeShip(0, { x: 3, y: 3 }, "x");
  test.recieveAttack(3, 3);
  expect(test.grid).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

it("check 4 attacks on ship grid result", () => {
  let test = new board(rules.size, rules.ships);
  test.placeShip(0, { x: 3, y: 3 }, "x");
  test.recieveAttack(3, 3);
  test.recieveAttack(4, 3);
  test.recieveAttack(5, 3);
  test.recieveAttack(6, 3);
  test.recieveAttack(7, 3);
  expect(test.grid).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

it("check 4 attacks on ship ship result", () => {
  let test = new board(rules.size, rules.ships);
  test.placeShip(0, { x: 3, y: 3 }, "x");
  test.recieveAttack(3, 3);
  test.recieveAttack(4, 3);
  test.recieveAttack(5, 3);
  test.recieveAttack(6, 3);
  test.recieveAttack(7, 3);
  expect(test.boats[0].ship.floats).toBe(false);
});

it("check isGameOver fn with all ship placed all sunked", () => {
  let test = new board(rules.size, rules.ships);
  test.placeShip(0, { x: 3, y: 3 }, "x");
  test.placeShip(1, { x: 0, y: 0 }, "y");
  test.placeShip(2, { x: 3, y: 5 }, "x");
  test.placeShip(3, { x: 2, y: 6 }, "y");
  test.placeShip(4, { x: 9, y: 8 }, "y");
  test.recieveAttack(3, 3);
  test.recieveAttack(4, 3);
  test.recieveAttack(5, 3);
  test.recieveAttack(6, 3);
  test.recieveAttack(7, 3);
  test.recieveAttack(0, 0);
  test.recieveAttack(0, 1);
  test.recieveAttack(0, 2);
  test.recieveAttack(0, 3);
  test.recieveAttack(3, 5);
  test.recieveAttack(4, 5);
  test.recieveAttack(5, 5);
  test.recieveAttack(2, 6);
  test.recieveAttack(2, 7);
  test.recieveAttack(2, 8);
  test.recieveAttack(9, 8);
  test.recieveAttack(9, 9);
  expect(test.isGameOver()).toBe(true);
});

it("check isGameOver fn with all ship placed and one shot left on one ship", () => {
  let test = new board(rules.size, rules.ships);
  test.placeShip(0, { x: 3, y: 3 }, "x");
  test.placeShip(1, { x: 0, y: 0 }, "y");
  test.placeShip(2, { x: 3, y: 5 }, "x");
  test.placeShip(3, { x: 2, y: 6 }, "y");
  test.placeShip(4, { x: 9, y: 8 }, "y");
  test.recieveAttack(3, 3);
  test.recieveAttack(4, 3);
  test.recieveAttack(5, 3);
  test.recieveAttack(6, 3);
  test.recieveAttack(7, 3);
  test.recieveAttack(0, 0);
  test.recieveAttack(0, 1);
  test.recieveAttack(0, 2);
  test.recieveAttack(0, 3);
  test.recieveAttack(3, 5);
  test.recieveAttack(4, 5);
  test.recieveAttack(5, 5);
  test.recieveAttack(2, 6);
  test.recieveAttack(2, 7);
  test.recieveAttack(2, 8);
  test.recieveAttack(9, 8);
  expect(test.isGameOver()).toBe(false);
});

it("check allShipsPlaced fn with all ship placed", () => {
  let test = new board(rules.size, rules.ships);
  test.placeShip(0, { x: 3, y: 3 }, "x");
  test.placeShip(1, { x: 0, y: 0 }, "y");
  test.placeShip(2, { x: 3, y: 5 }, "x");
  test.placeShip(3, { x: 2, y: 6 }, "y");
  test.placeShip(4, { x: 9, y: 8 }, "y");
  expect(test.allShipsPlaced()).toBe(true);
});
it("check allShipsPlaced fn with all but one ship placed", () => {
  let test = new board(rules.size, rules.ships);
  test.placeShip(0, { x: 3, y: 3 }, "x");
  test.placeShip(1, { x: 0, y: 0 }, "y");
  test.placeShip(2, { x: 3, y: 5 }, "x");
  test.placeShip(3, { x: 2, y: 6 }, "y");
  expect(test.allShipsPlaced()).toBe(false);
});
