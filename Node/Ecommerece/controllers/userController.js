const db = require("../db");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
//const sendEmail = require("../sendEmail");

function getUsers(req, res) {
    try {
        User.getAllUsers((err, result) => {
            if(err) {
                res.json({ message: err.message });
            }
            res.json(result);
        });
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

async function signUser(req, res) {
    try {
        const {name, email, password, phone, address, role} = req.body;
    
        if(!email || !password) {
            return res.json({message: "email and password are required"});
        }
        const passRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!passRegx.test(password)) {
            return res.json({ message: "Invalid password" });
        }

        const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegx.test(email)) {
            return res.json({ message: "Enter a valid email" });
        }

        User.getUserBYEmail(email, async(err, result) => {
            if(err) return res.json({ message: err.message });

            if(result.length > 0) {
                return res.json({ message: "Email already exist please login"});
            }
            const hashedPassword = await bcrypt.hash(password, 10);

            User.createUser({
                name,
                email,
                password: hashedPassword,
                phone,
                address,
                role
            }, (err) => {
                if(err) return res.json({ message: err.message });
                
                // sendEmail(
                //     email,
                //     "Welcome",
                //     "Welcome to our E-commerce store!"
                // );

                res.json({ message: "User added successfully" });
            });
        });
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

async function loginUser(req, res) {
    try {
        const { email, password } = req.body;
        User.getUserBYEmail(email, async(err, result) => {
            if(err) {
                return res.json({ message: err.message });
            }
            if(result.length === 0) {
                return res.json({ message: "Wrong email or password"});
            }
            const isMatch = await bcrypt.compare(password, result[0].password);

            if(!isMatch) {
                return res.json({ message: "wrong password" });
            }
            const token = jwt.sign(
                {
                    id: result[0].id,
                    email: result[0].email,
                    role: result[0].role
                },
                "your_secret_key",
                { expiresIn: "7d" }
            );

            res.cookie("token", token, {
                httpOnly: true,
                maxAge: 7 * 24 * 60 * 60 * 1000
            });
            res.json({ message: "welcome back" });
        });
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

function logoutUser(req, res) {
    res.clearCookie("token");

    res.json({ message: "logout successfully"});
}

function updateUser(req, res) {
    try {
        const userId = req.params.id;
        User.updateUserById(userId, req.body, (err, result) => {
        if(err) {
            res.json({ message: err.message });
        }
        res.json(result);
        });
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

function deleteUser(req, res) {
    try {
        const userId = req.params.id;
        User.deleteUserById(userId, (err, result) => {
            if(err) {
                res.json({ message: err.message});
            }
            res.json({message: "user deleted successfully"});
        }); 
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getUsers,
    signUser,
    loginUser,
    logoutUser,
    updateUser,
    deleteUser
};