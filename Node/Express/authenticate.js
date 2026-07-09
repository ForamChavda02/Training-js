const express = require("express");
const app = express();

function auth(req, res, next) {
    const password = req.query.password;

    if(password !== "1234") {
        return res.send("unauthorized");
    }
    next();
}

app.get("/admin", auth, (req, res) => {
    res.send("Welcome admin");
});

app.listen(3000);