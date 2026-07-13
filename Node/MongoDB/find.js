const { MongoClient } = require("mongodb");
const url = "url";

const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();

        const dbo = client.db("mydatabase");
        const collection = dbo.collection("users");

        const result = await collection.findOne({});

        if(result) {
            console.log("Document found! Name:", result.name);
        }
        else {
            console.log("No document found");
        }
    }
    catch (err) {
        console.error(err);
    }
    finally {
        await client.close();
    }
}
run();