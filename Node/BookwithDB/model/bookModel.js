const db = require("../db");

function getAllBooks(callback) {
    const sql = "SELECT * FROM books";
    db.query(sql, callback);
}

function addBook(book, callback) {
    const sql = "INSERT INTO books (title, author, type) VALUES (?, ?, ?)";
    db.query(sql, [book.title, book.author, book.type], callback);
}

function updateBook(bookId, book, callback) {
    const sql = "UPDATE books SET title = ?, author = ?, type = ? WHERE id = ?";
    db.query(sql, [book.title, book.author, book.type, bookId], callback);
}

function deleteBook(bookId, callback) {
    const sql = "DELETE FROM books WHERE id = ?";
    db.query(sql, [bookId], callback);
}

module.exports = {
    getAllBooks,
    addBook,
    updateBook,
    deleteBook
};