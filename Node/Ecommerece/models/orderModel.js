const db = require("../db");

async function getAllOrders() {
    try {
        const sql = "SELECT * FROM orders";
        const [rows] = await db.query(sql);

        return rows;
    }
    catch(error) {
        console.log(error.message);
    }
}

async function createOreder(order) {
    try {
        const sql = `
            INSERT INTO orders (user_id, total_amount, status, shipping_address)
            VALUES (?, ?, ?, ?)
        `;

        const [result] = await db.query(
            sql,
            [
                order.user_id,
                order.total_amount,
                order.status,
                order.shipping_address
            ],
        );
        return result;
    }
    catch(error) {
        console.log(error.message);
    }
}

async function updatedOrder(orderId, order) {
    try {
        const sql = `
            UPDATE orders
            SET user_id = ?, total_amount = ?, status = ?, shipping_address = ?
            WHERE id = ?
        `;

        const [result] = await db.query(
            sql,
            [
                order.user_id,
                order.total_amount,
                order.status,
                order.shipping_address,
                orderId
            ],
        );
        return result;
    }
    catch(error) {
        console.log(error.message);
    }
}

async function deleteOrder(orderId) {
    try {
        const sql = "DELETE FROM orders WHERE id = ?";

        const [result] = await db.query(sql, [orderId]);

        return result;
    }
    catch(error) {
        console.log(error.message);
    }
}

module.exports = {
    getAllOrders,
    createOreder,
    updatedOrder,
    deleteOrder
};