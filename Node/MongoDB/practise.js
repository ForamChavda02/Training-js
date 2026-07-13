const { MongoClient } = require("mongodb");

const url = "url";
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("connected successfully to Atlas");

        const db = client.db("mydatabase");
        console.log("Database object is ready to use");
    }
    catch(err) {
        console.error("Error:", err);
    }
    finally {
        await client.close();
        console.log("Connection closed");
    }
}

run();