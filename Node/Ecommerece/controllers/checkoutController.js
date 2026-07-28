const db = require("../db")

function checkOut(req, res) {
    try {
        const userId = req.params.userId;
        let sql = "SELECT * FROM cart WHERE user_id = ?";
        let sql2 = `SELECT SUM(products.price * cart.quantity) AS total_amount FROM cart JOIN products ON cart.product_id = products.id WHERE cart.user_id = ?`;
        let sql3 = "INSERT INTO orders (user_id, total_amount, shipping_address) VALUES (?, ?, ?)";
        const { shipping_address } = req.body;
        db.query(sql, [userId], (err, result1) => {
            if(err) {
                return res.json({ message: err.message });
            }
             db.query(sql2, [userId], (err, result2) => {
                if(err) {
                    return res.json({ message: err.message });
                }
                const total_amount = result2[0].total_amount;
                 db.query(sql3, [userId, total_amount, shipping_address], (err, result3) => {
                    if(err) {
                         return res.json({ message: err.message});
                    }
                    res.json({
                      cart: result1,
                      total: result2,
                      orderId: result3.insertId,
                      message: "checkout completed"
                    });
                });
            });
        });
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

function deleteItem(req, res) {
    try {
        const productId = req.params.id;
        const sql4 = "DELETE FROM cart WHERE product_id = ?";
        db.query(sql4, [id], (err, result) => {
            if(err) {
                return res.json({ message: err.message });
            }
            res.json({ message: "item deleted from cart" });
        });
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    checkOut,
    deleteItem
};