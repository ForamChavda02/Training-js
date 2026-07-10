const { MongoClient } = require("mongodb");

const url = "mongodb+srv://foram:foramchavda@cluster0.on7ponb.mongodb.net/?appName=Cluster0";

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