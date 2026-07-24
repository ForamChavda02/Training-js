const Book = require("../model/bookModel");

function getBooks(req, res) {
    Book.getAllBooks((err, result) => {
        if (err) {
            return res.json({ message: err.message });
        }
        res.json(result);
    });
}

function createBook(req, res) {
    const { title, author, type } = req.body;

    const book = { title, author, type };

    Book.addBook(book, (err, result) => {
        if (err) {
            return res.json({ message: err.message });
        }
        res.json({ message: "Book added successfully" });
    });
}

function updateBook(req, res) {
    const bookId = req.params.id;
    const { title, author, type } = req.body;

    const book = { title, author, type };

    Book.updateBook(bookId, book, (err, result) => {
        if (err) {
            return res.json({ message: err.message });
        }
        res.json({ message: "Book updated successfully" });
    });
}

function deleteBook(req, res) {
    const bookId = req.params.id;

    Book.deleteBook(bookId, (err, result) => {
        if (err) {
            return res.json({ message: err.message });
        }
        res.json({ message: "Book deleted successfully" });
    });
}

module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook
};