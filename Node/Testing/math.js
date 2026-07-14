function sum(a, b) {
    if(typeof a !== "number" || typeof b !== "number") {
        throw new Error("Both arguments should be numbers");
    }
    return a + b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division with zero");
    }
    return a / b;
}

module.exports = { sum, divide };