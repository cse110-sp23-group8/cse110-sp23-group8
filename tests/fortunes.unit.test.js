const gameObject = require("../source/js/fortunes.js");

// Test incrementScore

test("Score should be 1", () => {
  const testGame = new gameObject();
  testGame.incrementScore();
  expect(testGame.getScore()).toBe(1);
});

test("Score should be 2", () => {
  const testGame = new gameObject();
  testGame.incrementScore();
  testGame.incrementScore();
  expect(testGame.getScore()).toBe(2);
});

test("Score should not be 2", () => {
  const testGame = new gameObject();
  testGame.incrementScore();
  testGame.incrementScore();
  testGame.incrementScore();
  expect(testGame.getScore() == 2).toBe(false);
});

test("Score should not be 3", () => {
  const testGame = new gameObject();
  testGame.incrementScore();
  testGame.incrementScore();
  testGame.incrementScore();
  testGame.incrementScore();
  expect(testGame.getScore() == 3).toBe(false);
});

// Test decrementScore

test("Score should be 3", () => {
  const testGame = new gameObject();
  testGame.incrementScore();
  testGame.incrementScore();
  testGame.incrementScore();
  testGame.incrementScore();
  testGame.decrementScore();
  expect(testGame.getScore() == 3).toBe(true);
});

test("Score should be 2", () => {
  const testGame = new gameObject();
  testGame.incrementScore();
  testGame.incrementScore();
  testGame.incrementScore();
  testGame.incrementScore();
  testGame.decrementScore();
  testGame.decrementScore();
  expect(testGame.getScore() == 2).toBe(true);
});

test("Score should not be 2", () => {
  const testGame = new gameObject();
  testGame.incrementScore();
  testGame.incrementScore();
  testGame.incrementScore();
  testGame.incrementScore();
  testGame.decrementScore();
  testGame.decrementScore();
  testGame.decrementScore();
  expect(testGame.getScore() == 2).toBe(false);
});

test("Score should not be 1", () => {
  const testGame = new gameObject();
  testGame.incrementScore();
  testGame.incrementScore();
  testGame.incrementScore();
  testGame.incrementScore();
  testGame.decrementScore();
  testGame.decrementScore();
  testGame.decrementScore();
  testGame.decrementScore();
  expect(testGame.getScore() == 1).toBe(false);
});

// Test incrementWeird

test("Weird score should be 1", () => {
  const testGame = new gameObject();
  testGame.incrementWeird();
  expect(testGame.getWeird() == 1).toBe(true);
});

test("Weird score should be 2", () => {
  const testGame = new gameObject();
  testGame.incrementWeird();
  testGame.incrementWeird();
  expect(testGame.getWeird() == 2).toBe(true);
});

test("Weird score should not be 2", () => {
  const testGame = new gameObject();
  testGame.incrementWeird();
  testGame.incrementWeird();
  testGame.incrementWeird();
  expect(testGame.getWeird() == 2).toBe(false);
});

test("Weird score should not be 3", () => {
  const testGame = new gameObject();
  testGame.incrementWeird();
  testGame.incrementWeird();
  testGame.incrementWeird();
  testGame.incrementWeird();
  expect(testGame.getWeird() == 3).toBe(false);
});
