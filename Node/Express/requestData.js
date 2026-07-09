const express = require("express");
const app = express();

function welcome(req, res, next) {
    req.name = "Tony",
    next();
}

app.get("/", welcome, (req, res) => {
    res.send(`Welcome ${req.name}`);
});

app.listen(3000);