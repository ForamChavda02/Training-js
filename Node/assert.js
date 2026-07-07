const assert = require("assert").strict;

function add(a, b){
    if(typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Inputs must be numbers");
    }
    return a + b;
}

assert.strictEqual(add(2, 3), 5, "2 + 3 should equal 5");

assert.throws(
    () => add("2", 3),
    TypeError,
    "Should throw TypeError for non-number input"
);

console.log("all test passed!");