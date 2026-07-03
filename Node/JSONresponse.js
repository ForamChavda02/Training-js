const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    const student = {
        name: "rahlu",
        age: 22
    };
    res.end(JSON.stringify(student));
});

server.listen(5000);