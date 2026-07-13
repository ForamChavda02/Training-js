const { MongoClient } = require("mongodb");
const url = "url";

const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();

        const dbo = client.db("mydatabase");
        const collection = dbo.collection("users");

        const myobj = { name: "Foram", address: "Gandhinagar"};
        const res = await collection.insertOne(myobj);

        console.log("1 document is inserted");
        console.log(`genrated Id: ${res.insertedId}`);
    }
    catch(err) {
        console.error(err);
    }
    finally {
        await client.close();
    }
}

run();