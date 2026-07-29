const db = require("../db");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
//const sendEmail = require("../sendEmail");
const { validateUser } = require("../validator/userValidator");

async function getUsers(req, res) {
    try {
        const result = await User.getAllUsers();

        res.json(result);
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

async function signUser(req, res) {
    try {
        const {name, email, password, phone, address, role} = req.body;

        const error = validateUser(req.body);
        if(error) {
            return res.status(400).json({ message: error });
        }

        const result = await User.getUserBYEmail(email) 
        if(result.length > 0) {
            return res.json({
                message: "email already exists, please login"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.createUser({
            name,
            email,
            password: hashedPassword,
            phone,
            address,
            role
        });

        res.json({ message: "User added successfully" });
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

async function loginUser(req, res) {
    try {
        const { email, password } = req.body;
        const result = await User.getUserBYEmail(email);

        if(result.length === 0) {
            return res.json({ message: "Wrong email or password" });
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
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

function logoutUser(req, res) {
    res.clearCookie("token");

    res.json({ message: "logout successfully"});
}

async function updateUser(req, res) {
    try {
        const userId = req.params.id;
        const result = await User.updateUserById(userId);

        res.json(result);
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

async function deleteUser(req, res) {
    try {
        const userId = req.params.id;
        await User.deleteUserById(userId);

        res.json({ message: "User deleted successfully" });
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