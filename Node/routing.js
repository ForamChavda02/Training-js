const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("Root directory");
    }
    else if(req.url === "/about") {
        res.end("About Page");
    }

    else {
        res.end("Page Not Found");
    }
});

server.listen(8080);