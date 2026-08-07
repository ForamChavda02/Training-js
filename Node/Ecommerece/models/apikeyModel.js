const db = require("../db");
const crypto = require("crypto");

async function createApiKey(data) {
    try {
        const sql = `INSERT INTO api_keys (user_id, api_key, name, permissions) VALUES (?, ?, ?, ?)`;
        const [result] = await db.query(sql, [
            data.user_id,
            data.api_key,
            data.name,
            data.permissions
        ]);
        return result;
    }
    catch(error) {
        throw error;
    }
}

async function getAllApiKey() {
    try {
        const sql = `SELECT * FROM api_keys`;
        const [rows] = await db.query(sql);
        return rows;
    }
    catch (error) {
        throw error;
    }
}

async function UpdateApiKeyByUserId(data, userId) {
    try {
        const sql = `UPDATE api_keys SET api_key = ?, name = ?, permissions = ? WHERE user_id = ?`;
        const [result] = await db.query(sql, [
            data.api_key,
            data.name,
            data.permissions,
            userId
        ]);
        return result;
    }
    catch (error) {
        throw error;
    }
}

async function deleteApiKey(userId) {
    try {
        const sql = `DELETE FROM api_keys WHERE user_id = ?`;
        const [result] = await db.query(sql, [userId]);
        return result;
    }
    catch(error) {
        throw error;
    }
}

module.exports = {
    createApiKey,
    getAllApiKey,
    UpdateApiKeyByUserId,
    deleteApiKey
};