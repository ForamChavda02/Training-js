const express = require("express");
const app = express();
const { body, validationResult } = require("express-validator");
const PORT = process.env.PORT || 3000;
const db = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "mysecretkey";

app.use(express.json());

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({ message: "token required" });
    }
    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, SECRET_KEY);

        req.user = decoded;
        next();
    }
    catch(err) {
        return res.status(401).json({message: "Invalid token"});
    }
};

app.get("/users", auth, (req, res) => {
    const sql = "SELECT * FROM users";

    db.query(sql, (err, result) => {
        if(err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(200).json(result);
    });
});

app.post("/users/login", auth, async(req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(500).json({ message: "email and password are required"});
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        return res.status(500).json({ message: "enter valid email"});
    }

    if(password.length < 6) {
        return res.send(500).json({ message: "create password with more than length of 6"});
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const sql = "INSERT INTO users (email, hashedPassword) VALUES (?, ?)";

    db.query(sql, [email, password], (err, result) => {
        if(err) {
            return res.status(500).json({message: err.message });
        }

        res.status(201).json({
            message: "User logedin",
            id: result.insertId
        });
        const token = jwt.sign(
            {
                id: result[0].id,
                email: result[0].email
            },
            SECRET_KEY,
            {
                expiresIn: "1h"
            }
        );
    });
});

app.get("/users/:password", auth, (req, res) => {
    const { password } = req.params;
    db.query("SELECT * FROM users WHERE password = ?", [password], (err, result) => {
        if(err) {
            return res.status(500).json({ message : err.message});
        }
        res.json(result);
    });
});

app.get("/users/:id", auth, (req, res) => {
    const { id } = req.params;
    db.query("SELECT * FROM users WHERE id = ?", [id], (err, result) => {
        if(err) {
            return res.status(500).json({ message: err.message });
        }
        res.json(result);
    });
});

app.post("/users/login", auth, (req, res) => {
    const { email, password } = req.body;
    const Email = "SELECT * FROM users WHERE email = ?";
    db.query(Email, [email], (err, result) => {
        if(result.length === 0) {
            return res.json({ message: "User not found" });
        }
        if(result[0].password === req.body.password) {
            return res.json({ message: "User already loggedIn"});
        }
        res.json({ message: "Password doesn't match"});
    });
    
});

app.put("/users/login/:id", auth, (req, res) => {
   const userId = req.params.id;
   const { email, password } = req.body;

   db.query("UPDATE users SET email = ?, password = ? WHERE id = ?", [email, password, userId], (err, result) => {
    if(err) {
        return res.json({ message : err.message });
    }
    res.json({result});
   });
});

app.delete("/users/:id", auth, (req, res) => {
    const userId = req.params.id;
    const sql = "DELETE FROM users WHERE id = ?;"

    db.query(sql, [userId], (err, result) => {
        if(result.affectedRows === 0) {
            return res.json({ message: "User not found"});
        }
        res.json({message: "user deleted successfully"});
    });
});

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
});
