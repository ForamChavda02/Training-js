const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus.length;

cluster.schedulingPolicy = cluster.SCHED_NONE;

if(cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    for(let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster.fork();
    });
}
else {
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`Hello from worker ${process.pid}\n`);
    }).listen(8080);

    console.log(`Worker ${process.pid} strated`);
}