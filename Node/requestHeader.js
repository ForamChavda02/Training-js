const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.end("go to your terminal");
});

server.listen(8080);