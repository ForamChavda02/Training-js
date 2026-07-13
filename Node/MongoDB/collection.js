const { MongoClient } = require("mongodb");
const url = "url";

const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();

        const dbo = client.db("mydatabase");

        await dbo.createCollection("users");
        console.log("Collection created!");
    }
    catch(err) {
        console.error("Error:", err);
    }
    finally {
        await client.close();
    }
}

run();