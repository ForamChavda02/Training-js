const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const books = [
    { id: 1, title: "the power of now", author: "eckart tolle", genre: "self-help", readStatus: false},
    { id: 2, title: "Atomic habits", author: "james calrs", genre: "self-help", readStatus: true}
];

app.use(express.json());

app.get("/books", (req, res) => {
    res.json({books});
}); 

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id); 
    if(!book) {
        return res.status(404).json({ message: "book not found"})
    }
    res.json({book});
});


app.post("/books", (req, res) => {
    if(!req.body.title && !req.body.author) {
        return res.status(401).json({message: "title and author both are required"});
    }

    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        readStatus: req.body.readStatus
    };

    books.push(newBook);
    res.json({newBook});
});

app.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);
    if(!book) {
        return res.status(401).json({ message: "book not found" });
    }

    const updateBook = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        readStatus: req.body.readStatus
    };
    res.json({updateBook});
});

app.delete("/books/:id", (req, res) => {
    const index = books.findIndex(b => b.id === parseInt(req.params.id));
    const deleteBook = books[index];

    books.splice(index, 1);
    res.json({deleteBook});
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({ message: "Something went wrong"});
});

app.listen(PORT, () => {
    console.log(`We are om ${PORT}`);
});