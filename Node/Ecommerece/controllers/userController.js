const db = require("../db");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

function getUsers(req, res) {
    User.getAllUsers((err, result) => {
        if(err) {
            res.json({ message: err.message });
        }
        res.json(result);
    });
}

async function signUser(req, res) {
    const {name, email, password, phone, address, role} = req.body;
    
    if(!email || !password) {
        return res.json({message: "email and password are required"});
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

            res.json({ message: "User added successfully" });
        });
    });
}

async function loginUser(req, res) {
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
        res.json({ message: "Welcome back, you are logged in!"});
    });
}

function updateUser(req, res) {
    const userId = req.params.id;
    User.updateUserById(userId, req.body, (err, result) => {
        if(err) {
            res.json({ message: err.message });
        }
        res.json(result);
    });
}

function deleteUser(req, res) {
    const userId = req.params.id;
    User.deleteUserById(userId, (err, result) => {
        if(err) {
            res.json({ message: err.message});
        }
        res.json({message: "user deleted successfully"});
    });
}

module.exports = {
    getUsers,
    signUser,
    loginUser,
    updateUser,
    deleteUser
};