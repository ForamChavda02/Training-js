const fs = require("fs");

const readableStream = fs.createReadStream("myfile.txt", {
    encoding: "utf8",
    highWaterMark: 64 * 1024
});

readableStream.on("data", (chunk) => {
    console.log(`received ${chunk.length} bytes of data.`);
    console.log(chunk);
});

readableStream.on("end", () => {
    console.log("no more data");
});

readableStream.on("error", (err) => {
    console.error("Error:", err);
});

readableStream.on("readable", () => {
    let chunk;
    while(null !== (chunk = readableStream.read())) {
        console.log(`Read ${chunk.length} bytes of data`);
        console.log(chunk);
    }
});

readableStream.on("end", () => {
    console.log("chunk thing");
});