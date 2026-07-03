const http = require("http");
const { URL } = require("url");

const server = http.createServer((req, res) => {
    const parsedURL = new URL(req.url, `http://${req.headers.host}`);

    console.log(parsedURL.searchParams.get("name"));
    console.log(parsedURL.searchParams.get("age"));

    res.end("res.end");
});

server.listen(5000);