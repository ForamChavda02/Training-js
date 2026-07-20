const axios = require("axios");
async function login() {
    try {
        const response = await axios.post("http://reqres.in/api/register", {
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        },
        {
            headers: {
                "x-api-key": "my-api-key"
            }
        }
     );

    console.log("ID", response.data.id);
    console.log("Token:", response.data.token);
    }

    catch(err) {
        console.log(err);
    }
}

login();