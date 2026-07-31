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

async function getCartItems(userId) {
    try {
        const sql = `SELECT cart.product_id,
        cart.quantity,
        products.price
        FROM cart
        JOIN products
        ON cart.product_id = products.id
        WHERE cart.user_id = ?`;

        const [rows] = await db.query(sql, [userId]);
        return rows;
    }  
    catch(error) {
        return res.json({ message: error.message });
    }  
}

async function calculateTotal(userId) {
    try {
        const sql = `SELECT SUM(products.price * cart.quantity) AS total_amount
        FROM cart
        JOIN products ON cart.product_id = products.id
        WHERE cart.user_id = ?`;

        const [rows] = await db.query(sql, [userId]);
        return rows[0].total_amount;
    }
    catch(error) {
        return res.json({ message: error.message });
    }
}

async function createOreder(userId, total) {
    const sql = `INSERT INTO orders (user_id, total_amount, status) VALUES(?, ?, ?)`;
    const [result] = await db.query(sql, [userId, total, "pending"]);
    return result.insertId;
}

async function addOrderItem(orderId, productId, quantity, price) {
    const sql = `INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)`;

    const [result] = await db.query(sql, [orderId, productId, quantity, price]);

    return result;
}

async function clearCart(userId) {
    const sql = `DELETE FROM cart WHERE user_id = ?`;

    const [result] = await db.query(sql, [userId]);

    return result;
}

async function orderStatus(orderId, status) {
    const sql = `UPDATE orders SET status = ? WHERE id = ?`;

    const [result] = await db.query(sql, [orderId, status]);

    return result;
}

async function getOrderHistory(userId) {
    const sql = `SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC`;

    const [rows] = await db.query(sql, [userId]);

    return rows;
}

async function changeOrderStatus(orderId, status) {
    const sql = `UPDATE orders SET status = ? WHERE id = ?`;

    const [result] = await db.query(sql, [status, orderId]);

    return result;
}

module.exports = {
    getAllOrders,
    createOreder,
    updatedOrder,
    deleteOrder,
    getCartItems,
    calculateTotal,
    createOreder,
    addOrderItem,
    clearCart,
    orderStatus,
    getOrderHistory,
    changeOrderStatus
};