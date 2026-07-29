const db = require("../db");

async function getAllUsers() {
   const [rows] = await db.query("SELECT * FROM users;");
   return rows;
}

async function getUserBYEmail(email) {
   const [rows] = await db.query(
    "SELECT * FROM users WHERE email = ?;", 
    [email]
   );
   return rows;
}

async function createUser(user) {
    const sql = "INSERT INTO users (name, email, password, phone, address, role) VALUES (?, ?, ?, ?, ?, ?)";
    const [result] = await db.query(sql, [
        user.name, 
        user.email, 
        user.password, 
        user.phone, 
        user.address, 
        user.role
    ]);
    return result;
}

async function updateUserById(userId, user) {
    const sql = `UPDATE users SET name = ?, email = ?, password = ?, phone = ?, address = ?, role = ? WHERE id = ?`;
    const [result] = await db.query(sql, [
        user.name, 
        user.email, 
        user.password, 
        user.phone, 
        user.address, 
        user.role, 
        userId
    ]);
    return result;
}

async function deleteUserById(userId) {
    const sql = "DELETE FROM users WHERE id = ?";
    const [result] = await db.query(sql, [userId]);
    return result;
}

module.exports = {
    getAllUsers,
    getUserBYEmail,
    createUser,
    updateUserById,
    deleteUserById
};