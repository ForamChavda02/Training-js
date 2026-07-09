const express = require("express");
const app = express();
const port = 3000;

function logPath(req, res, next) {
    console.log("User is visiting:" + req.url);
    next();
}

app.use(logPath);

app.get("/home", logPath, (req, res) => {
    res.send(req.url);
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});