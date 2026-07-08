const express = require("express");
const app = express();
const port = 3000;

app.get("/search", (req, res) => {
    const { q, category } = req.query;
    res.send(`Search query: ${q}, Category: ${category || "none"}`);
});

app.listen(port, () => {
    console.log(`we are on port ${port}`);
});