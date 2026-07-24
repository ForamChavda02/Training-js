const db = require("../db");

function getAllOrders(callback) {
    const sql = "SELECT * FROM orders";
    db.query(sql, callback);
}

function createOreder(order, callback) {
    const sql = `
        INSERT INTO orders (user_id, total_amount, status, shipping_address)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            order.user_id,
            order.total_amount,
            order.status,
            order.shipping_address
        ],
        callback
    );
}

function updatedOrder(orderId, order, callback) {
    const sql = `
        UPDATE orders
        SET user_id = ?, total_amount = ?, status = ?, shipping_address = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [
            order.user_id,
            order.total_amount,
            order.status,
            order.shipping_address,
            orderId
        ],
        callback
    );
}

function deleteOrder(orderId, callback) {
    const sql = "DELETE FROM orders WHERE id = ?";

    db.query(sql, [orderId], callback);
}

module.exports = {
    getAllOrders,
    createOreder,
    updatedOrder,
    deleteOrder
};