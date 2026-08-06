const db = require("../db");

async function createPayment(payment) {
    try {
        const sql = `INSERT INTO payments (order_id, payment_id, amount, method, status) VALUES (?, ?, ?, ?, ?)`;
        const [result] = await db.query(sql, [
            payment.order_id,
            payment.payment_id,
            payment.amount,
            payment.method,
            payment.status
        ]);
        return result;
    }
    catch (error) {
        throw error;
    }
}

async function getPaymentById(paymentId) {
    try {
        const sql = `SELECT * FROM payments WHERE payment_id = ?`;
        const [rows] = await db.query(sql, [paymentId]);
        return rows;
    }
    catch (error) {
        throw error;
    }
}

async function refundPayment(paymentId, payment) {
    try {
        const sql = `UPDATE payments SET status = ? WHERE payment_id = ?`;
        const [result] = await db.query(sql, [
            payment.status,
            paymentId
        ]);
        return result;
    }
    catch (error) {
        throw error;
    }
}

async function deletePendingPayment(paymentId) {
    try {
        const sql = `DELETE FROM payments WHERE payment_id = ? AND status = "falied"`;
        const [result] = await db.query(sql, [paymentId]);
        return result;
    }
    catch (error) {
        throw error;
    }
}

async function isPaymentSuccessful(paymentId, status) {
    try {
        const sql = `SELECT * FROM payments WHERE payment_id = ? AND status = "paid"`;
        const [rows] = await db.query(sql, [paymentId, status]);
        return rows;
    }
    catch (error) {
        throw error;
    }
}

async function deleteFailedPayment() {
    try {
        const sql = `DELETE FROM payments WHERE status = "failed" AND created_at < DATE_SUB(NOW(), INTERVAL 31 DAY)`;
        const [result] = await db.query(sql);
        console.log("we are inside deleteFailedPayment");
        return result;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    createPayment,
    getPaymentById,
    refundPayment,
    deletePendingPayment,
    isPaymentSuccessful,
    deleteFailedPayment
};