const express = require("express");
const app = express();

function first(req, res, next) {
    console.log("fisrt");
    next();
} 

function second(req, res, next) {
    console.log("second");
    next();
}

app.get("/", first, second, (req, res) => {
    res.send("Done");
});

app.listen(8080);