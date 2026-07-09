const express = require("express");
const app = express();
const port = 3000;

app.get("/welcome", (req, res) => {
    const name  = req.query.name;
    console.log(name);
    res.send(`hello ${name}`);
});

app.listen(port, () => {
    console.log(`app is on ${port}`);
});