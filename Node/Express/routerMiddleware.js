const express = require("express");
const app = express();

function checkUser(req, res, next) {
    console.log("checking user but this is router level middleware");
    next();
}

app.get("/", (req, res) => {
    res.send("home page");
});

app.get("/profile", (req, res) => {
    res.send("Profile page");
});

app.listen(3000);