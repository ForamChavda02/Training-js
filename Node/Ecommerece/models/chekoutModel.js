const db = require("../db");

async function checkout(userId, shipping_address) {
    const connection = await db.getConnection();
    try{
        await connection.beginTransaction();

        const [cart] = await connection.query(`
            SELECT * FROM cart WHERE user_id = ?`, [userId]
        );

        const [total] = await connection.query(
            `SELECT SUM(products.price * cart.quantity) AS total_amount
             FROM cart
             JOIN products
             ON cart.product_id = products.id
             WHERE cart.user_id = ?`,
             [userId]
        );
        const total_amount = total[0].total_amount;

        const [order] = await connection.query(
            `INSERT INTO orders (user_id, total_amount, shipping_address) VALUES (?, ?, ?)`,
            [userId, total_amount, shipping_address]
        );
        await connection.commit();

        return {
            cart, 
            total,
            orderId: order.insertedId 
        };
    }
    catch(error) {
        await connection.rollback();
        throw error;
    }
    finally {
        connection.release();
    }
}

async function deleteitem(productId) {
    let sql4 = "DELETE FROM cart WHERE product_id = ?";

    const [result] = await db.query(sql4, [productId]);

    return result;
}

module.exports = {
    checkout,
    deleteitem
};
