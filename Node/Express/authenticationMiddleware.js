const express = require('express');
const app = express();

function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).send("Authentication required");
    }

    const token = authHeader.split(" ")[1];

    if (token === "select-token") {
        req.user = {id: 123, username: 'John'};
        next();
    }
    else {
        res.status(403).send("Invalid token");
    }
}

app.get("/api/protected", authenticate, (req, res) => {
    res.json({ message: "Protected data", user: req.user});
});