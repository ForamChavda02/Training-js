const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("X-Powered-By", "Node.js");
    res.end("res.end");
});

server.listen(8080);