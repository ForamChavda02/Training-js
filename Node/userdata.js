const readline = require("readline");
const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter file name:",  async(file) => {
    try {
        const data = await readFile(file, "utf8");
        console.log(data);
    }
    catch(err) {
        console.log(err);
    }
    rl.close();
});