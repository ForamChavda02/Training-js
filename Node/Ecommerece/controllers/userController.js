const db = require("../db");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
//const sendEmail = require("../sendEmail");
const { validateUser } = require("../validator/userValidator");
const otpModel = require("../models/otpModel");
const { constants } = require("node:buffer");

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

        const user = result[0];

        if(user.locked_until && new Date(user.locked_until) > new Date()) {
            return res.status(403).json({ message: "Account is locked try again later" });
        }

        const isMatch = await bcrypt.compare(password, result[0].password);

        if(!isMatch) {
            await User.increaseFailedAttempts(user.id);
            const updatedUser = await User.getUserBYEmail(email);
            if(updatedUser[0].failed_attempts >= 5) {
                await User.lockAccount(user.id);

                return res.json({ message: "Account locked" });
            }
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
        const user = req.body;
        console.log(req.body);
        console.log(req.params);
        if(user.password) {
            user.password = await bcrypt.hash(user.password, 10);
        }
        const result = await User.updateUserById(userId, user);

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

async function forgetPassword(req, res) {
    console.log("we hit forget password");
    try {
        const email = req.body.email;
        const sql = "SELECT * FROM users WHERE email = ?";
        console.log(email);

        const [result] = await db.query(sql, [email]);
        console.log("Query result obtained:", result);

        if(!result || result.length === 0) {
            return res.status(404).json({ message: "no such email exists" });
        }
        const user = result[0];
        const token = jwt.sign(
            { email: user.email },
            "your_secret_token",
            { expiresIn: "10m" }
        );
        const link = `http://localhost:3000/users/reset-password?token=${token}`;
        console.log(link);

        console.log("we completed forgot password");

        return res.json({ resetLink: link });
    }
    catch (error) {
        return res.json({ message: error.message });
    }
}

async function resetPassword(req, res) {
    console.log("we hit the reset password");
    try {
        const urlParams = new URL(req.url, `http://${req.headers.host}`);
        const token = urlParams.searchParams.get("token");
        const decode = jwt.verify(token, "your_secret_token");

        const newPassword = req.body.password;
        const sql = "UPDATE users SET password = ? WHERE email = ?";
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        const [result] = await db.query(sql, [ hashedPassword, decode.email ]);
        if(result.affectedRows === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log("We completed the reset password");
        return res.json({ message: "password updated"});

    }
    catch(error) {
        console.log(`Error in reset-password:`, error);
        return res.json({ message: error.message });
    }
}

async function changePassword(req, res) {
    try {
        const { currentPassword, newPassword } = req.body;
        const userId = req.user.id;

        await User.changePassword(userId, currentPassword, newPassword);

        res.json({ message: "password changed successfully" });
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }
}

async function changeEmail(req, res) {
    try {
        const userId = req.user.id;
        const { newEmail } = req.body;

        const user = await User.getUserBYEmail(newEmail);
        if(user.length > 0) {
            return res.json({
                message: "Email already exists"
            });
        }
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

        await otpModel.saveOTP(newEmail, otp, expiresAt);
        
        res.json({ 
            message: "OTP generated", 
            otp
        });
    }catch(error) {
        res.status(500).json({ message: error.message });
    }
}

async function verifyChangeEmail(req, res) {
    console.log("inside change email");
    try {
        const { newEmail, otp } = req.body;

        const result = await otpModel.findOTP(newEmail, otp);

        if(!result) {
            return res.json({
                message: "Invalid or expired otp"
            });
        } 
        await User.updateEmail(req.user.id, newEmail);

        await otpModel.deleteOTP(newEmail);
        res.json({ 
            message: "Email updated successfully"
        });
    }

    catch(error) {
        return res.status(500).json({ message: error.message });
    }
}
console.log(typeof verifyChangeEmail);

module.exports = {
    getUsers,
    signUser,
    loginUser,
    logoutUser,
    updateUser,
    deleteUser,
    forgetPassword,
    resetPassword,
    changePassword,
    changeEmail,
    verifyChangeEmail
};