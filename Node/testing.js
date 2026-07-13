const assert = require("assert");
const { add, subtract } = require("./calculator");

assert.strictEqual(add(1, 2), 3, "Addition");
assert.strictEqual(add(-1, 1), 0, "Addition with negative");

assert.strictEqual(subtract(5, 2), 3, "Subreaction");
assert.strictEqual(subtract(2, 5), -3, "wrong subtraction");

console.log("all test pass");