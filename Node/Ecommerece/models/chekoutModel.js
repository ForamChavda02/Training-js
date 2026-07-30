const db = require("../db");

async function checkout(userId, shipping_address) {
    try {
        await db.beginTransaction();

        const [items] = await db.query(
            `SELECT cart.product_id, cart.quantity, products.stock
             FROM cart
             JOIN products ON cart.product_id = products.id
             WHERE cart.user_id = ?`,
            [userId]
        );

        for (const item of items) {
            if (item.quantity > item.stock) {
                throw new Error(`Insufficient stock for product ID ${item.product_id}`);
            }
        }

        const [cart] = await db.query(
            `SELECT * FROM cart WHERE user_id = ?`,
            [userId]
        );

        const [totalResult] = await db.query(
            `SELECT SUM(products.price * cart.quantity) AS total_amount
             FROM cart
             JOIN products ON cart.product_id = products.id
             WHERE cart.user_id = ?`,
            [userId]
        );

        const total_amount = totalResult[0].total_amount || 0;

        if (total_amount === 0) {
            throw new Error("Cannot checkout empty cart");
        }

        const [orderResult] = await db.query(
            `INSERT INTO orders (user_id, total_amount, shipping_address)
             VALUES (?, ?, ?)`,
            [userId, total_amount, shipping_address]
        );

        for (const item of items) {
            await db.query(
                `UPDATE products
                 SET stock = stock - ?
                 WHERE id = ?`,
                [item.quantity, item.product_id]
            );
        }

        await db.query(
            `DELETE FROM cart WHERE user_id = ?`,
            [userId]
        );

        await db.commit();

        return {
            cart,
            total: total_amount,
            orderId: orderResult.insertId
        };

    } catch (error) {
        await db.rollback();
        throw error;
    }
}

async function deleteitem(productId) {
    const sql = "DELETE FROM cart WHERE product_id = ?";

    const [result] = await db.query(sql, [productId]);

    return result;
}

module.exports = {
    checkout,
    deleteitem
};