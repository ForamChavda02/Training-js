const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use("/static", express.static("public"));

app.use("/assets", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send(`<h1> Static example </h1>`);
});

app.listen(port, () => {
    console.log(`we are on port: ${port}`);
});