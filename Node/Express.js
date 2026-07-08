const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("Hello this is Express.js!");
});

app.listen(port, () => {
    console.log(`Express server running at https//localhost:${port}`);
});