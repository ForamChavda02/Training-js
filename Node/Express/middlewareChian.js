const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("middleware 1");
    next();
});

app.use((req, res, next) => {
    console.log("middleware 2");
    next();
});

app.get("/", (req, res) => {
    res.send("learning middleware");
});

app.listen(3000, () => {
    console.log("on port 3000");
});