const { MongoClient, Collection } = require("mongodb");
const url = "url";

const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();

        const dbo = client.db("mydatabase");
        const collection = dbo.collection("users");
        const mySort = { name: -1};

        const result = await collection.find().sort(mySort).toArray();

        console.log("soreted orders");
        console.log(result);
    }
    catch(err) {
        console.error(err);
    }
    finally {
        await client.close();
    }
}

run();