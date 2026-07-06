const fs = require("fs");
const { Transform } = require("stream");
const csv = require("csv-parser");

const filterTransform = new Transform({
    objectMode: true,
    transform(row, encoding, callback) {
        if(parseInt(row.age) > 18) {
            row.isAdult = "yes";

            this.push(row);
        }
        callback();
    }
});

const results = [];
const writeToArray = new Transform({
    objectMode: true,
    transform(row, encoding, callback) {
        results.push(row);
        callback();
    }
});

fs.createReadStream("people-csv")
.pipe(csv())
.pipe(filterTransform)
.pipe(writeToArray)
.on("finish", () => {
    console.log(`${results.length}`);
    console.log(results);
});