require("dotenv").config();
const http = require("http");
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY || "no_key_found";

const server = http.createServer((req, res) => {
    if(req.url === "/" && req.method === "GET") {
        res.writeHead(200, {"content-type": "text/plian"});
        res.end("Welcome to the Home page!");
    }

    else if (req.url === "/api" && req.method === "GET") {
        res.writeHead(200, {"content-type": "text/plain"});
        res.end("404 page not found");
    }
});

server.listen(PORT, () => {
    console.log(`Server is on port: ${PORT}`);
});