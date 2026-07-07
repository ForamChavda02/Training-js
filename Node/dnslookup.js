const dns = require("dns");
const assert = require("assert");

dns.lookup("google.com", (err, address) => {
    if(err) throw err;

    console.log(address);
});

dns.resolve4("youtube.com", (err, address) => {
    if(err) throw err;

    console.log(address);
});

dns.reverse("8.8.8.8", (err, hostname) => {
    if(err) throw err;
    console.log(hostname);
});

assert.strictEqual(5, 5);
console.log("Passed");

const user = {
    name: "Foram"
};

assert.deepStrictEqual(user, {
    name: "Foram"
});

console.log("Object matched");

const logedIn = true;
assert.ok(logedIn);
console.log("User authentication");