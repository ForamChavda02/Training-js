const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/typicode.com", (req, res) => {
    res.send("hello, we are inside typicode path");
});

app.get("/typicode.com/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if(id === 2) {
        return res.status(200).json({ message: "ok, userId 2"});
    }
    res.status(404).json({ message: "id didn't match"});
});

app.get("/pokeapi.co", (req, res) => {
    res.send("hello, we are inside pokeapi.co");
});

app.listen(PORT, () => {
    console.log(`On ${PORT}`);
});