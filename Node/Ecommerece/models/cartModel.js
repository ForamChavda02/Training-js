const db = require("../db");

async function addtoCart(user_id, product_id, quantity) {
    const [product] = await db.query(
        `SELECT stock from products WHERE id = ?`,
        [product_id]
    );

    if(product.length === 0) {
        throw new Error("Product not found");
    }

    if(quantity > product[0].stock) {
        throw new Error("insufficient stock");
    }

    const [result] = await db.query(
        "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)",
        [user_id, product_id, quantity]
    );
    return result;
}

async function getcartByid(userId) {
    try {
        const sql = "SELECT * FROM cart WHERE user_id = ?";

        const [rows] = await db.query(sql, [userId], callback);
        return rows;
    }
    catch(error) {
        console.log(error.message);
    }
}

async function updatecart(id, cart) {
    try {
        const sql = `
            UPDATE cart
            SET user_id = ?, product_id = ?, quantity = ?
            WHERE id = ?
        `;

       const [result] = await db.query(
            sql,
            [cart.user_id, cart.product_id, cart.quantity, id],
            callback
        );
        return result;
    }
    catch(error) {
        console.log(error.message);
    }
}

async function deleteCart(id) {
    try {
        const sql = "DELETE FROM cart WHERE id = ?";

        const [result] = await db.query(sql, [id], callback);

        return result;
    }
    catch(error) {
        console.log(error,message);
    }
}

module.exports = {
    addtoCart,
    getcartByid,
    updatecart,
    deleteCart
};