const express = require("express"); 
const fs = require("fs");

const app = express();
const port = 3000;
const FILE_PATH = "./books.json";

app.use(express.json());

const readBookFromFile = () => {
    try {
        const data = fs.readFileSync(FILE_PATH, "utf8");
        return JSON.parse(data);
    }
    catch (error) {
        return [];
    }
};

const writeBooksToFile = (booksArray) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(booksArray, null, 2), "utf8");
};

app.get("/books/:id", (req, res) => {
    const id = Number(req.params.id);
    const books = readBookFromFile();

    const book = books.find(b => b.id === id);

    if(!book) {
        return res.status(404).json({
            message: "book not found"
        });
    }
    res.json(book);
});

app.post("/books", (req, res) => {
    const { title, author } = req.body;

    if(!title || !author) {
        return res.status(400).json({
            message: "Title and author are requred"
        });
    }
    const books = readBookFromFile();

    const newBook = {
        id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
        title,
        author
    };

    books.push(newBook);
    writeBooksToFile(books);

    res.status(201).json({
        message: "Book added successfully",
        book: newBook
    });
});

app.put("/books/:id", (req, res) => {
    const id = Number(req.params.id);
    const { title, author } = req.body;
    const books = readBookFromFile();

    const book = books.find(b => b.id === id);

    if(!book) {
        return res.status(404).json({
            message: "book not found"
        });
    }

    books.title = title || book.title;
    book.author = author || book.author;

    writeBooksToFile(books);

    res.json({
        message: "Book updated successfully",
        book
    });
});

app.delete("/books/:id", (req, res) => {
    const id = Number(req.params.id);
    const books = readBookFromFile();

    const index = books.findIndex(b => b.id === id);

    if(index === -1) {
        return res.status(404).json({
            message: "Book not found"            
        });
    }
    books.splice(index, 1);
    writeBooksToFile(books);

    res.json({
        message: "Book deleted scessfully"
    });
});

app.listen(port, () => {
    console.log(`app is listening on port: ${port}`);
});