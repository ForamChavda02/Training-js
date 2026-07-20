const axios = require("axios");

async function login() {
    try {
        const loginReponse = await axios.post("https://reqres.in/api/login", {
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        },
        {
            headers: {
                "x-api-key": "my-api-key"
            }
        }
    );
        const token = loginReponse.data.token;

        const response = await axios.get(
            "https://reqres.in/api/users/2", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );

        console.log(response.config.headers);
    }
    catch(err) {
        console.log(err.response?.data || err.message);
    }
}

login();