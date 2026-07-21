const express = require("express");
const app = express();
const PORT = 3000;
const db = require("./db");

app.use(express.json());

app.get("/books", (req, res) => {
    const sql = "SELECT * FROM books;";
    db.query(sql, (err, result) => {
        if(err) {
            return res.json({ message: err.message });
        }
        res.json({ result });
    });
});

app.post("/books", (req, res) => {
    const { title, author, type } = req.body;
    const sql = "INSERT INTO books (title, author, type) VALUES (?, ?, ?);";
    db.query(sql, [title, author, type], (err, result) => {
        if(err) {
            return res.json({ message: err.message });
        }
        res.status(200).json({message: "book added successfully"});
    });
});

app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const { title, author,  type} = req.body;
    const sql = "UPDATE books SET title = ?, author = ?, type = ? WEHRE id = userId;";
    db.query(sql, [title, author, type, bookId], (err, result) => {
        if(err) {
            return res.json({ message: err.message });
        }
        res.json({result});
    });
});

app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const sql = "DELETE FROM books WHERE id = bookId";
    db.query(sql, [bookId], (err, result) => {
        if(err) {
            return res.json({message: err.message});
        }
        res.json({ message: "book deleted successfully" });
    });
});

app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`);
});