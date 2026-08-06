const db = require("../db");

async function createNotification(not) {
    try {
        console.log(not);
        const sql = `INSERT INTO notifications(user_id, title, message, is_read) VALUES (?, ?, ?, ?)`;
        console.log(typeof not.user_id);
        console.log(not.user_id);
        const [result] = await db.query(sql, [
            not.user_id,
            not.title,
            not.message,
            not.is_read
        ]);
        return result;
    }
    catch (error) {
        throw error;
    }
}

async function getNotificationByUser(userId){
    try {
        const sql = `SELECT * FROM notifications WHERE user_id = ?`;
        const [rows] = await db.query(sql, [userId]);
        return rows;
    }
    catch(error) {
        throw error;
    }
}

async function markAsRead(userId) {
    try {
        const sql = `UPDATE notifications SET is_read = true WHERE user_id = ?`;
        const [result] = await db.query(sql, [userId]);
        return result;
    }
    catch(error) {
        throw error;
    }
}

async function deleteNotification(userId) {
    try {
        const sql = `DELETE FROM notifications WHERE user_id = ?`;
        const [result] = await db.query(sql, [userId]);
        return result;
    }
    catch(error) {
        throw error;
    }
}

module.exports = {
    createNotification,
    getNotificationByUser,
    markAsRead,
    deleteNotification
};