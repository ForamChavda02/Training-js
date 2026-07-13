const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

let books = [
    {
        id: "1",
        title: "The power of now",
        author: "echart tolle",
        year: 2011,
        genre: "self help"
    },
    {
        id: "2",
        title: "To kill a Mockingbird",
        author: "harper lee",
        year: 1960,
        genre: "southern gothic" 
    }
];

const schema = buildSchema(`
    type Book {
      id: ID!
      title: String!
      author: String!
      year: Int!
      genre: String!
    }

    type Query {
      getBooks: [Book!]!
      getBook(id: ID!): Book
    }

    # FIX: "input" must be entirely lowercase
    # FIX: Fixed typo "auithor" -> "author"
    input BookInput {
      title: String
      author: String
      year: Int
      genre: String
    }

    type Mutation {
        # Add a new book 
        addBook(input: BookInput!): Book!
        
        # Update an existing book
        updateBook(id: ID!, input: BookInput!): Book
        
        # Delete a book
        deleteBook(id: ID!): Boolean
    }
`);

const root = {

    getBooks: () => books,
    getBook: ({ id }) => books.find(book => book.id === id),

    addBook: ({ input }) => {
        const newBook = {
            id: Date.now().toString(),
            ...input
        };
        books.push(newBook);
        return newBook;
    },

    updateBook: ({ id, input }) => {
        const bookIndex = books.findIndex(book => book.id === id);
        if (bookIndex === -1) return null;
        const updatedBook = {
            ...books[bookIndex],
            ...input
        };
        books[bookIndex] = updatedBook;
        return updatedBook;
    },

    deleteBook: ({ id }) => {
        const bookIndex = books.findIndex(book => book.id === id);
        if (bookIndex === -1) return false;

        books.splice(bookIndex, 1);
        return true;
    }
};

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/graphql`);
});