const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

app.get("/token-auth", async (req, res) => {
    try {
        const loginResponse = await axios.post(
            "https://reqres.in/api/login",
            {
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "my-api-key"
                }
            }
        );
        const token = loginResponse.data.token;

        console.log("Token:", token);

        const protectedRequest = await axios.get(
            "https://reqres.in/api/users/2",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "x-api-key": "my-api-key"
                }
            }
        );

        res.json({
            token: token,
            protectedResponse: protectedRequest.data
        });

    } catch (err) {
        res.status(500).json({
            error: err.response?.data || err.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`);
});