const { MongoClient } = require("mongodb");
const url = "url";

const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();

        const dbo = client.db("mydatabase");
        const collection = dbo.collection("users");

        const myQery = { address: "Kathla"};
        const newValues = { $set: { name: "Bhavya", address: "Kathlal"}};

        const res = await collection.updateOne(myQery, newValues);

        if(res.modifiedCount > 0) {
            console.log("1 document is updated successfully");
        }
        else {
            console.log("No match found");
        }
    }
    catch(err) {
        console.error(err);
    }
    finally {
        await client.close();
    }
}

run();