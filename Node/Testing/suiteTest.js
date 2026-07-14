const { test, describe, before, after, beforeEach, afterEach } = require("node:test");
const assert = require("node:assert/strict");

describe("Test Suite with Hooks", () => {
    let testData = [];

    before(() => {
        console.log("Running before all tests");
        testData;
    });

beforeEach(() => {
    console.log("Runnig before each test");
});

test("array length", () => {
    assert.strictEqual(testData.length, 3);
});

afterEach(() => {
    console.log("Running after each test");
});

after(() => {
    console.log("Running after all tests");
    testData = [];
});

});