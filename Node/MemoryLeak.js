const { timeStamp } = require("console");
const http = require("http");

const requestData = {};
const server = http.createServer((req, res) => {
    const requestId = Date.now() + Math.random().toString(36).substring(2, 15);

    requestData[requestId] = {
        url: req.url,
        method: req.method,
        headers: req.headers,
        timeStamp: Date.now(),

        payload: Buffer.alloc(1024 * 1024)
    };

    const memoryUsage = process.memoryUsage();
    console.log(`memory usage after request ${requestId}`);
    console.log(`-Heap Used: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`);
    console.log(`-Request count: ${Object.keys(requestData).length}`);

    res.end("Request processed");
});

server.listen(3000);