const express = require("express");
const app = express();
const port = 3000;

function visitorCount(req, res, next) {
    console.log("A new visitor arrived !");
    next();
}

app.get("/home", visitorCount, (req, res) => {
    res.send("Hello and Welcome");
});

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});