const express = require("express");
const app = express();
const port = 3000;

function addTimestamp(req, res, next) {
    req.serverTime = Date.now();
    next();
}

app.get("/status", addTimestamp, (req, res) => {
    res.send(req.serverTime);
});

app.listen(port, () => {
    console.log(`app is listening on port: ${port}`);
});