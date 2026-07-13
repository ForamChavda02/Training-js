const { MongoClient } = require("mongodb");
const url = "url";

const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        const dbo = client.db("mydatabase");
        const collection = dbo.collection("users");

        const myobj = [
            {name: "Aryan", address: "Gandhinagar"},
            {name: "Krupal", address: "Kalol"},
            {name: "Mayur", address: "Kathlal"},
            {name: "Manmeet", aadress: "Kalol"},
            {name: "Bhavya", address: "Kathla"}
        ];
        const res = await collection.insertMany(myobj);
        console.log("Inserted all!");
    }
    catch(err) {
        console.error(err);
    }
    finally {
        await client.close();
    }
}

run();