const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

async function read() {
    const data = await readFile("data.txt", "utf8");
    console.log(data);
}

read();

const text = util.format(
    "hello %s Age %d",
    "john",
    25
);

console.log(text);

const user = {
    name: "Foram",
    age: 22
};

console.log(util.inspect(user));