const { Worker } = require("worker_threads");

const buffer = new ArrayBuffer(100 * 1024 * 1024);
const view = new Uint8Array(buffer);

for(let i = 0; i < view.length; i++) {
    view[i] = i % 256;
}

console.log("Buffer created in main thread");
console.log("Buffer byteLength before transfer:", buffer.byteLength);

const worker = new Worker("./transferWorker.js");
worker.on("message", (message) => {
    console.log("message from worker:", message);

    console.log("Buffer byteLength after trsanfer:", buffer.byteLength);
});

worker.postMessage({ buffer }, [ buffer ]);