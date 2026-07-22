const db = require("../db");

function getAllUsers(callback) {
    db.query("SELECT * FROM users;", callback);
}

function getUserBYEmail(email, callback) {
    db.query("SELECT * FROM users WHERE email = ?;", [email], callback);
}

function createUser(user, callback) {
    const sql = "INSERT INTO users (name, email, password, phone, address, role) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sql, [user.name, user.email, user.password, user.phone, user.address, user.role], callback);
}

function updateUserById(userId, user, callback) {
    const sql = `UPDATE users SET 
    name = ?, 
    email = ?, 
    password = ?, 
    address = ?, 
    role = ? 
    WHERE id = ?`;
    db.query(sql, [user.name, user.email, user.password, user.phone, user.address, user.role, userId], callback);
}

function deleteUserById(userId, callback) {
    const sql = "DELETE FROM users WHERE id = ?";
    db.query(sql, [userId], callback);
}

module.exports = {
    getAllUsers,
    getUserBYEmail,
    createUser,
    updateUserById,
    deleteUserById
};