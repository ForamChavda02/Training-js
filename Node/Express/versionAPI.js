const express = require("express");
const { version } = require("node:os");
const app = express();
const port = 3000;

app.get("/api/v1/users", (req, res) => {
    res.json({
        version: "V1",
        users: ["alice", "bob"]
    });
});

app.get("/api/v2/users", (req, res,) => {
    res.json({
        version: "V2",
        users: [
            {id: 1, name: "alice", role:"Admin"},
            {id: 2, name: "bob", role:"User"}
        ]
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "Middleware showing error"
    });
});

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
});