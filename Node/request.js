const https = require("https");
const fs = require("fs");

const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
};

const server = https.createServer(options, (req, res) => {

    console.log(req.method);
    console.log(req.url);

    res.end("Done");
});

server.listen(5000);