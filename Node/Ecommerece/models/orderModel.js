const db = require("../db");

function getAllOrders(callback) {
    try {
        const sql = "SELECT * FROM orders";
        db.query(sql, callback);
    }
    catch(error) {
        console.log(error.message);
    }
}

function createOreder(order, callback) {
    try {
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
    catch(error) {
        console.log(error.message);
    }
}

function updatedOrder(orderId, order, callback) {
    try {
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
    catch(error) {
        console.log(error.message);
    }
}

function deleteOrder(orderId, callback) {
    try {
        const sql = "DELETE FROM orders WHERE id = ?";

        db.query(sql, [orderId], callback);
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