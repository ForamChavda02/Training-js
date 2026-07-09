const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("logger middleware");
    next();
});

app.get("/", (req, res) => {
    res.send("we are at home page");
});

app.get("/about", (req, res) => {
    res.send("About");
});

app.listen(3000);