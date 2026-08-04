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

// async function updatePaymentStatus(paymentId, status) {
//     try {

//     }
// }