const test = require("node:test");
const assert = require("node:assert/strict");

test("basic arithmetic", (t) => {
    assert.equal(1 + 2, 2, "1 + 1 should equal 2");

    assert.deepEqual(
        { a: 1, b: { c: 2 } },
        { a: 1, b: { c: 2 } }
    );
});

test('async test', async (t) => {
    const result = await Promise.resolve("async result");
    assert.strictEqual(result, "async result");
});