const db = require("../db");

function addtoCart(cart, callback) {
    const sql = "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)";

    db.query(sql, [cart.user_id, cart.product_id, cart.quantity], callback);
}

function getcartByid(userId, callback) {
    const sql = "SELECT * FROM cart WHERE user_id = ?";

    db.query(sql, [userId], callback);
}

function updatecart(id, cart, callback) {
    const sql = `
        UPDATE cart
        SET user_id = ?, product_id = ?, quantity = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [cart.user_id, cart.product_id, cart.quantity, id],
        callback
    );
}

function deleteCart(id, callback) {
    const sql = "DELETE FROM cart WHERE id = ?";

    db.query(sql, [id], callback);
}

module.exports = {
    addtoCart,
    getcartByid,
    updatecart,
    deleteCart
};