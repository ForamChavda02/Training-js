const { parentPort } = require("worker_threads");

parentPort.on("message", ({ buffer }) => {
    const view = new Uint8Array(buffer);

    let sum = 0;
    for(let i = 0; i < view.length; i++) {
        sum += view[i];
    }

    console.log(`Buffer received in worker`);
    console.log(`Buffer byteLength in worker:`, buffer.byteLength);
    console.log(`Sum of all values:`, sum);

    parentPort.postMessage("Buffer proccess complet");
});