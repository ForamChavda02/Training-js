const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { Query } = require("mongoose");

const booksData = [
    { id: "1", title: "atomic habits", author: "james carls"},
    { id: "2", title: "The power of now", author: "ekart tolle"},
];

const typeDefs = `#graphql
type Book {
    id: ID!
    title: String!
    author: String!
}

type Query {
    books: [Book]
    book(id: ID!): Book
}`;

const resolvers = {
    Query: {
        books: () => booksData, 
        book: (parent, args) => booksData.find(book => book.id === args.id),
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
    const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
    console.log(`graphql server ready at: ${url}`);
}

startServer();