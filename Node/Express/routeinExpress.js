const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("GET request and we are at / so its a homepage");
});

app.post("/", (req, res) => {
    res.send("POST request and we are at / so its a homepage");
});

app.get("/about", (req, res) => {
    res.send("GET but with about page");
});

app.use((req, res) => {
    res.status(404).send("404 - page not found");
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});