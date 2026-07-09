const express = require("express");
const app = express();

function block(req, res, next) {
    return res.send("Access denied");
}

app.get("/", block, (req, res) => {
    res.send("home");
});

app.listen(3000);