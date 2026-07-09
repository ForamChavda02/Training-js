const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

const users = [
    {
        username: "admin",
        password: "1234"
    }
];

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = user.find(u => 
        u.username === username &&
        u.password === password
    );

    if(!user) {
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }
    res.json({
        token: "secret123"
    });
});

app.use((err, req, res, next) => {
    console.error(err.stcak);
    res.status(500).json({
        message: "Error middleware"
    });
});

app.listen(port, () => {
    console.log(`on port ${port}`);
});