const util = require("util");
const fs = require("fs");

const readable = util.promisify(fs.readFile);

const greeting = util.format("hii", new Date().toDateString());
console.log(greeting);

const obj = {
    name: "Test",
    nested: { a: 1, b: [2, 3]},
    fn: function() { return 'test';}
};

console.log(util.inspect(obj, { colors: true, depth: 2}));

const debug = util.debuglog("app");
debug("Inside Debug");

async function readConfig() {
    try {
        const data = await fs.readFile("package.json", "utf8");
        console.log(JSON.parse(data).name);
    }
    catch(err) {
        console.error(err);
    }
}
readConfig();