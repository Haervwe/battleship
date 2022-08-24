let ship = require("./ships");

// ship class test;

it("cheks constructor lenght", () => {
  expect(new ship(5).size).toBe(5);
});

it("cheks constructor lenght = 0", () => {
  expect(new ship(0).size).toBe(undefined);
});
it("cheks constructor lenght = -2", () => {
  expect(new ship(-2).size).toBe(undefined);
});

it("cheks constructor lenght inmutability", () => {
  let testship = new ship(5);
  testship.size = 7;
  expect(testship.size).toBe(5);
});

it("cheks constructor array", () => {
  expect(new ship(5).slots).toStrictEqual([1, 1, 1, 1, 1]);
});

it("checks constuctor array inmutability outside declared methods", () => {
  let testship = new ship(5);
  testship.slots = 7;
  expect(testship.slots).toStrictEqual([1, 1, 1, 1, 1]);
});

it("cheks constructor floats", () => {
  expect(new ship(5).floats).toBe(true);
});

it("cheks constructor floats inmutability", () => {
  let testship = new ship(5);
  testship.floats = false;
  expect(testship.floats).toBe(true);
});

it("checks constuctor array changes with shot method", () => {
  let testship = new ship(5);
  testship.shot(3);
  expect(testship.slots).toStrictEqual([1, 1, 0, 1, 1]);
});

it("checks constuctor array changes with shot method outside the ship", () => {
  let testship = new ship(5);
  testship.shot(7);
  expect(testship.slots).toStrictEqual([1, 1, 1, 1, 1]);
});

it("checks constuctor array changes with shot method outside the ship with negative value", () => {
  let testship = new ship(5);
  testship.shot(-7);
  expect(testship.slots).toStrictEqual([1, 1, 1, 1, 1]);
});

it("checks constuctor floats function", () => {
  let testship = new ship(5);
  testship.shot(1);
  testship.shot(2);
  testship.shot(3);
  testship.shot(4);
  testship.shot(5);
  expect(testship.floats).toBe(false);
});
