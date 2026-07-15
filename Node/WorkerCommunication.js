const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if(cluster.isPrimary) {
    console.log(`Master ${process.pid} is running`);

    const requestCounts = {};

    function setupWorkerTracking(worker) {
        requestCounts[worker.id] = 0;

        worker.on("message", (msg) => {
            if(msg.cmd === "incrementRequestCount") {
                requestCounts[worker.id] ++;
                console.log(`Worker ${worker.id} (pid ${worker.process.pid}) has handled ${requestCounts[worker.id]}`);
            }
        });
    }
    for(let i = 0; i < numCPUs; i ++) {
        const worker = cluster.fork();
        setupWorkerTracking(worker);
    }

    setInterval(() => {
        for(const id in cluster.workers) {
            if(cluster.workers[id]) {
                cluster.workers[id].send({
                    cmd: "requestCount",
                    requestCount: requestCounts[id] || 0
                });
            }
        }
        console.log(`Total request counts: `, requestCounts);
    }, 1000);

    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);

        const newWorker = cluster.fork();
        setupWorkerTracking(newWorker);
    });
}
else {
    console.log(`Worker ${process.pid} started`);

    let localRequestCount = 0;

    process.on("message", (msg) => {
        if(msg.cmd === "requestCount") {
            console.log(`Worker ${process.pid} has handled ${msg.requestCount} request according to master`);
        }
    });

    http.createServer((req, res) => {
        if(process.send) {
            process.send({ cmd: "incrementRequestCount"});
        }

        localRequestCount++;

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.send(`Hello from Worker ${process.pid}, I have handled ${localRequestCount} requests locally\n`);
    }).listen(3000);
}