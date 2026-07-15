const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus.length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    for(let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);

        console.log("Forking a new worker...");
        cluster.fork();
    });
}
else {
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`hello from Worker ${process.pid}\n`);

        let i = 1e7;
        while (i > 0) {i --;} 
    }).listen(3000);

    console.log(`Worker ${process.pid} started`);
}