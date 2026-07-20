const books = [
    {
        id: 1, 
        title: "Atomic Habits"
    }
];

function getBooks(req, res) {
    res.json(books);
}

function addBook(req, res) {
    const newBook = {
        id: books.length + 1,
        title: req.body.title
    };
    books.push(newBook);
    res.status(200).json({ message: "book added"});
}

function updateBook(req, res) {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);
    if(!book) {
        return res.status(404).json({ message : "book not found"});
    }
    book.title = req.body.title || book.title;
    res.json(book);
}

function deleteBook(req, res) {
   const bookId = parseInt(req.params.id);
   const bookIndex = books.findIndex(b => b.id === bookId);

   if(bookIndex === -1) {
    return res.status(404).json({ message:"book bot found"});
   }
   books.splice(bookIndex, 1);
   res.status(204).send();
}

module.exports = {
    getBooks,
    addBook, 
    updateBook,
    deleteBook
};