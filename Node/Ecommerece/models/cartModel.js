const db = require("../db");

async function addtoCart(cart, callback) {
    try {
        const sql = "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)";

        const [result] = await db.query(sql, [
            cart.user_id, 
            cart.product_id, 
            cart.quantity
         ], callback
        );
        return result;
    }
    catch(error) {
        console.log(error.message);
    }
}

async function getcartByid(userId, callback) {
    try {
        const sql = "SELECT * FROM cart WHERE user_id = ?";

        const [rows] = await db.query(sql, [userId], callback);
        return rows;
    }
    catch(error) {
        console.log(error.message);
    }
}

async function updatecart(id, cart, callback) {
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

async function deleteCart(id, callback) {
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