const { Worker } = require("worker_threads");

function runWorker(workerData) {
    return new Promise((resolve, reject) =>{
        const worker = new Worker("./worker.js", { workerData });

        worker.on("message", resolve);
        worker.on("error", reject);

        worker.on("exit", (code) => {
            if(code !== 0) {
                reject(new Error(`Worker stopeed with exit code ${code}`));
            }
        });
    });
}

async function run() {
    try{
        const result = await runWorker("Hello from workerThread");
        console.log("Worker result:", result);
    }
    catch(err) {
        console.error("Work erro:", err);
    }
}
run().catch(err => console.error(err));