const db = require("../db");
const Order = require("../models/chekoutModel");

async function checkOut(req, res) {
    try {
        const userId = req.params.userId;
        const { shipping_address } = req.body;
        
        const result = await Order.checkout(
            userId, 
            shipping_address
        );

        res.json({
            ...result,
            message: "checkout completed"
        });
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

async function deleteItem(req, res) {
    try {
        const productId = req.params.id;
        
        await Order.deleteitem(productId);

        res.json({
            message: "Item deleted from cart"
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