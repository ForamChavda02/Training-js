const db = require("../db");

async function createLog(log) {
    try {
        const sql = `INSERT INTO audit_logs(user_id, action, table_name, record_id, description) VALUES (?, ? ,?, ?, ?)`;
        const [result] = await db.query(sql, [
            log.user_id,
            log.action,
            log.table_name,
            log.record_id,
            log.description
        ]);
        return result;
    }
    catch(error) {
        throw error;
    }
}

async function getAllLog() {
    try {
        const sql = `SELECT * FROM audit_logs`;
        const [rows] = await db.query(sql);
        return rows;
    }
    catch(error) {
        throw error;
    }
}

async function getLogByUser(userId) {
    try {
        const sql = `SELECT * FROM users WHERE user_id = ?`;
        const [rows] = await db.query(sql);
        return rows;
    }
    catch (error) {
        throw error;
    }
}

module.exports = { 
    createLog,
    getAllLog,
    getLogByUser
};