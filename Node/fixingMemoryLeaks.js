const { timeStamp } = require("console");
const http = require("http");
const requestData = {};

const server = http.createServer((req, res) => {
    const requestId = Date.now() + Math.random.toString(36).substring(2, 15);

    requestData[requestId] = {
        url: req.url,
        method: req.method,
        timeStamp: Date.now()
    };

    res.on("finish", () => {
        delete requestData[requestId];
        console.log(`cleaned up ${requestId}`);
    });

    res.end("Request proccesed");
});

server.listen(3000);