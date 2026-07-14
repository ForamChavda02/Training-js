const assert = require("assert");
const UserService = require("./user-service");

const mockDatabase = {
    async findById(id) {
        if(id === 1) {
            return {
                id: 1,
                name: "Alice",
                email: "alice@gmail.com"
            };
        }
        return null;
    }
};

async function testUserService(params) {
    const userService = new UserService(mockDatabase);

    const user = await userService.getUserById(1);
    assert.strictEqual(user.name, "Alice");

    try {
        await userService.getUserById(999);
        assert.fail("Expected an error");
    }
    catch(err) {
        assert.strictEqual(err.message, "User not found");
    }

    console.log("All tests passed!");
}

testUserService();