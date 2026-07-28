const db = require("../db");

function addtoCart(cart, callback) {
    try {
        const sql = "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)";

        db.query(sql, [cart.user_id, cart.product_id, cart.quantity], callback);
    }
    catch(error) {
        console.log(error.message);
    }
}

function getcartByid(userId, callback) {
    try {
        const sql = "SELECT * FROM cart WHERE user_id = ?";

        db.query(sql, [userId], callback);
    }
    catch(error) {
        console.log(error.message);
    }
}

function updatecart(id, cart, callback) {
    try {
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
    catch(error) {
        console.log(error.message);
    }
}

function deleteCart(id, callback) {
    try {
        const sql = "DELETE FROM cart WHERE id = ?";

        db.query(sql, [id], callback);
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