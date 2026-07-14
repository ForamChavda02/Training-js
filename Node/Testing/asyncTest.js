const assert = require("assert");
const AsyncService = require("./async-testing");

async function testAsyncService() {
    const service = new AsyncService();

    const fetchResult = await service.fetchData();
    assert.strictEqual(fetchResult.status, "Success");
    assert.deepStrictEqual(fetchResult.data, [1, 2, 3]);

    const processResult = await service.processData();
    assert.deepStrictEqual(processResult, [2, 4, 6]);

    console.log("AsyncService tests passed!");
}

testAsyncService().catch(err => {
    console.error("test failed", err);
});