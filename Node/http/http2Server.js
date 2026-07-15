const http2 = require("http2");
const fs = require("fs");
const path = require("path");

const options = {
    key: fs.readFileSync(path.join(__dirname, "notes.js")),
    cert: fs.readFileSync(path.join(__dirname, "notes.js"))
};

const server = http2.createSecureServer(options);

server.on("stream", (stream, headers) => {
    const path = headers[':path'];

    if(path === "/") {
        stream.respond({
            "content-type": "text/html",
            ":status": 200
        });
        stream.end("<h1> Hello from HTTP2 </h2>");
    }
    else {
        stream.respond({
            ":status": 404
        });
        stream.end("Not found");
    }
});

const port = 8080;
server.listen(port, () => {
    console.log(`HTTP/2 server is on port ${port}`);
});