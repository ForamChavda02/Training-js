const { describe } = require("node:test");
const { sum, divide } = require("./math.js");

describe("math.js", () => {

    describe("sum()", () => {
        it("should add two numbers correctly", () => {
            expect(sum(1, 2)).toBe(3);
            expect(sum(-1, 1)).toBe(0);
        });
        it("should throw new error for non-number inputs", () => {
            expect(() => sum("1", 2)).toThrow("Both arguments must be numbers");
        });
    });

    describe("divide()", () => {
        it("should divide two numbers correctly", () => {
            expect(divide(10, 2)).toBe(5);
        });

        it("should throw error when dividing by zero", () => {
            expect(() => divide(10, 0)).toThrow("Division by zero");
        });
    });
});