const db = require("../db");

function getOreders(req, res) {
    const sql = "SELECT * FROM orders";
    db.query(sql, (err, result) => {
        if(err) {
            return res.json({ message: err.message});
        }
        res.json(result);
    });
}

function addOrders(req, res) {
    const {user_id, total_amount, status, shipping_address} = req.body;
    console.log(req.body);  
    const sql = "INSERT INTO orders (user_id, total_amount, status, shipping_address) VALUES(?, ?, ?, ?);";
    db.query(sql, [user_id, total_amount, status, shipping_address], (err, result) => {
        if(err) {
            return res.json({ message: err.message });
        }
        res.json({ message: "Order added to cart"});
    });
}

function updateOrders(req, res) {
    const orderId = req.params.id;
    const {user_id, total_amount, status, shipping_address} = req.body;
    const sql = "UPDATE orders SET user_id = ?, total_amount = ?, status = ?, shipping_address = ? WHERE id = ?;";
    db.query(sql, [user_id, total_amount, status, shipping_address, created_at, orderId], (req, res) => {
        if(err) {
            return res.json({ message: err.message });
        }
        res.json({result});
    });
}

function deleteOrders(req, res) {
    const orderId = req.params.id;
    const sql = "DELETE FROM orders WHERE id = ?;";
    db.query(sql, [orderId], (req, res) => {
        if(err) {
            return res.json({ message: err.message });
        }
        res.json({ message: "order removed from cart"});
    });
}

module.exports = {
    getOreders,
    addOrders,
    updateOrders,
    deleteOrders
}