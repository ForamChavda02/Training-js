const fs = require("fs");

const wasmBuffer = fs.readFileSync("notes.txt");

WebAssembly.instantiate(wasmBuffer).then(result => {
    const instance = result.instance;

    const sum = instance.exports.add(2, 3);
    console.log("2 + 3 =", sum);
});