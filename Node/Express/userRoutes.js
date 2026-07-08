const express = require("express");
const app = express();
const port = 5000;

app.get("/users/:userId/books/:bookId", (req, res) => {
    res.send(`User Id: ${req.params.userId}, Book ID: ${req.params.bookId}`);
});

app.listen(port, () => {
    console.log(`we are on port: ${port}`);
});