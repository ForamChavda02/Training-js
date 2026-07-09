const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("middleware 1st one");
    next();
});

app.get("/", (req, res) => {
    res.send("Home page");
});

app.listen(3000, () => {
    console.log("server is running...");
});