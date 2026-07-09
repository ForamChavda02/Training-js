const express = require("express");
const app = express();
const port = 3000;

function checkPremium(req, res, next) {
    req.isPremium = true;
    next();
}

app.get("/dashboard", checkPremium, (req, res) => {
    if(req.isPremium) {
        return res.send("welcome to premium Dashboard!");
    }
    res.send("welcome");
});

app.listen(port, () => {
    console.log(`on port ${port}`);
});