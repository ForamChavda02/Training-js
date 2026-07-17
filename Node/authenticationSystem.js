const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

const users = [];
const JWT_SECRET = process.env.JWT_SECRET || "my_seceret_jwt_key";

//add new users
app.post("/register", async(req, res) => {
    try {
        const { username, password } = req.body;

        if(users.find(u => u.username === username)) {
            return res.status(409).json({ message: "Username alreday exist"});
        }

        const hashedPasswod = await bcrypt.hash(password, 10);

        const user = {
            id: users.length + 1,
            username,
            password: hashedPasswod
        };

        users.push(user);

        res.status(201).json({ message: "User register successfully"});
    }
    catch(err) {
        res.status(500).json({message: "Registration failed"});
    } 
});

//login
app.post("/login", async(req, res) => {
    try {
        const { username, password } = req.body;

        const user = users.find(u => u.username === username);
        if(!user) {
            return res.status(401).json({ message: "Invalid credentials"});
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch) {
            return res.status(401).json({ message: "Invalid credentials"});
        }

        const token = jwt.sign(
            { userId: user.id, username: user.username },
            JWT_SECRET,
            { expiresIn: "1h"}
        );
        res.json({ token });
    }

    catch(err) {
        res.status(500).json({ message: "Authentication failed" });
    }
});

function autherizationToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token) {
        return res.status(401).json({ message: "Authentication required" });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if(err) {
            return res.status(403).json({ message: "Invalid or expired token"});
        }
        req.user = user;
        next();
    });
}

app.get("/profie", autherizationToken, (req, res) => {
    res.json({ user: req.user });
});

app.listen(3000, () => {
    console.log("we are on port 3000");
});