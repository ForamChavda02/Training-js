const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/token-auth", async (req, res) => {
    try {
        const loginResponse = await axios.post("https://dummyjson.com",
            {
                username: "emilys",
                password: "emilyspass"
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        const token = loginResponse.data.token;

        console.log("Token", token);

        const protectedRequest = await axios.get("https://dummyjson.com", 
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        res.json({
            token: token,
            protectedRequest: protectedRequest.data
        });
    }
    catch(err) {
        res.status(500).json({ error: err});
        console.log(err);
    }
});

app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`);
});