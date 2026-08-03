const db = require("../db");

async function saveOTP(email, otp, expiresAt) {
    try {
        await db.query("DELETE FROM otp WHERE email = ?", [email]);
        const sql = `INSERT INTO otp (email, otp, expires_at) VALUES (?, ?, ?)`;
        const [result] = await db.query(sql, [email, otp, expiresAt]);
        return result.insertId; 
    }
    catch(error) {
        throw error;
    }
}

async function findOTP(email, otp) {
    try {
        const sql = `SELECT * FROM otp WHERE email = ? AND otp = ? AND expires_at > NOW()`;
        const [result] = await db.query(sql, [email, otp]);
        return result.length > 0;
    }
    catch(error) {
        throw error;
    }
}

async function deleteOTP(email) {
    try {
        const sql = `DELETE FROM otp WHERE email = ?`;
        const [result] = await db.query(sql, [email]);
        return result;
    }
    catch(error) {
        throw error;
    }
}

async function updateEmail(userId, newEmail) {
    try {
        const sql = `UPDATE users SET email = ? WHERE id = ?`;
        await db.query(sql, [newEmail, userId]);
    }
    catch(error) {
        throw error;
    }
}

module.exports = {
    saveOTP,
    findOTP,
    deleteOTP,
    updateEmail
};