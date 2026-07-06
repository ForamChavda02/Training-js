const https = require("https");
const fs = require("fs");

const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
};

const server = https.createServer(options, (req, res) => {
    if(req.url === "/") {
        res.end("Home");
    }

    else if(req.url === "/about") {
        res.end("About");
    }

    else {
        res.end("Not Found");
    }
});

server.listen(5000);