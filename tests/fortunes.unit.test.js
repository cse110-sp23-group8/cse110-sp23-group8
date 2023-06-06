const functions = require("../source/js/fortunes.js");

let testGame = new functions.gameObject();

// Test incrementScore

testGame.incrementScore();

test("Score should be 1", () => {
    expect(testGame.score == 1).toBe(true);
});

testGame.incrementScore();

test("Score should be 2", () => {
    expect(testGame.score == 2).toBe(true);
});

testGame.incrementScore();

test("Score should not be 2", () => {
    expect(testGame.score == 2).toBe(false);
});

testGame.incrementScore();

test("Score should not be 3", () => {
    expect(testGame.score == 3).toBe(false);
});

// Test decrementScore
testGame.decrementScore();

test("Score should be 3", () => {
    expect(testGame.score == 3).toBe(true);
});

testGame.decrementScore();

test("Score should be 2", () => {
    expect(testGame.score == 2).toBe(true);
});

testGame.decrementScore();

test("Score should not be 2", () => {
    expect(testGame.score == 2).toBe(false);
});

testGame.decrementScore();

test("Score should not be 1", () => {
    expect(testGame.score == 1).toBe(false);
});

// Test incrementWeird
testGame.incrementWeird();

test("Weird score should be 1", () => {
    expect(testGame.weird == 1).toBe(true);
});

testGame.incrementWeird();

test("Weird score should be 2", () => {
    expect(testGame.weird == 2).toBe(true);
});

testGame.incrementWeird();

test("Weird score should not be 2", () => {
    expect(testGame.weird == 2).toBe(false);
});

testGame.incrementWeird();

test("Weird score should not be 3", () => {
    expect(testGame.weird == 3).toBe(false);
});
