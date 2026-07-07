const fs = require("fs");

const stream = fs.createReadStream("data.txt", "utf8");

stream.on("data", (chunk) => {
    console.log(chunk);
});

const read = fs.createReadStream("data.txt");
const write = fs.createWriteStream("copy.txt");

read.pipe(write);

stream.on("open", () => {
    console.log("Opened");
});

stream.on("end", () => {
    console.log("Finished");
});