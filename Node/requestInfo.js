const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);

    res.end("Done");
});

//server.listen(8080);