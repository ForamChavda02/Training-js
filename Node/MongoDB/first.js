const { MongoClient } = require("mongodb");

const url = "url";

const client = new MongoClient(url);

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to atlasDB");

        const db = client.db("practiceDB");

        console.log("database connected:", db.databaseName);
    }
    catch(error) {
        console.error(error);
    }finally {
        await client.close();
    }
}

connectDB();
