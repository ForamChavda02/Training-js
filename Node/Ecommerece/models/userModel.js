const db = require("../db");
const bcrypt = require("bcrypt");

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

async function changePassword(userId, currentPassword, newPassword) {
    console.log("we are inside change password");
    const [users] = await db.query(
        "SELECT password FROM users WHERE id = ?",
        [userId]
    );

    if(users.length === 0) {
        throw new Error ("user not found");
    }

    const match = await bcrypt.compare(currentPassword, users[0].password);

    if(!match) {
        throw new Error("current password incorrect");
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await db.query(
        "UPDATE users SET password = ? WHERE id = ?",
        [hashedPassword, userId]
    );
    return true;
}

module.exports = {
    getAllUsers,
    getUserBYEmail,
    createUser,
    updateUserById,
    deleteUserById,
    changePassword
};