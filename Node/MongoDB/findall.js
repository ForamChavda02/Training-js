const { MongoClient } = require("mongodb");
const url = "url";

const client = new MongoClient(url);

async function run() {
    try { 
        await client.connect();

        const dbo = client.db("mydatabase");
        const collection = dbo.collection("users");

        const result = await collection.find({}).toArray();

        console.log("All users");
        console.log(result);
    }
    catch (err) {
        console.error(err);
    }
    finally {
        await client.close();
    }
}
run();