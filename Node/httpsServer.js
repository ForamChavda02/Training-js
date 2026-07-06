const https = require("https");
const fs = require("fs");

const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
};

const server = https.createServer(options, (req, res) => {
    res.end("HTTPS");
});

server.listen(5000, () => {
    console.log("https 5000");
});