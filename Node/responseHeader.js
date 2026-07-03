const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content - Type": "text/http"
    });
    res.end("Hii from my code");
});
server.listen(3000);