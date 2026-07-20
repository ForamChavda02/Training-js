const axios = require("axios");

async function findUser() {
    try {
        const page1 = await axios.get("https://reqres.in/api/users?page=1");
        const page2 = await axios.get("https://reqres.in/api/users?page=2");

        const users = [...page1.data.data, ...page2.data.data];

        console.log(users);
        console.log("totla users", users.length);
    }
    catch(err) {
        console.log(err);
    }
}

findUser();