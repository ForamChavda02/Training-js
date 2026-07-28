const Cart = require("../models/cartModel");

function addToCart(req, res) {
    try {
        const { user_id, product_id, quantity } = req.body;

        const cart = {
            user_id,
            product_id,
            quantity
        };

        Cart.addtoCart(cart, (err, result) => {
            if (err) {
                return res.json({ message: err.message });
            }

            res.json({ message: "Product added to cart" });
        });
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

function getCartById(req, res) {
    try {
        const userId = req.params.userId;

        Cart.getcartByid(userId, (err, result) => {
            if (err) {
                return res.json({ message: err.message });
            }

            res.json(result);
        });
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

function updateCart(req, res) {
    try {
        const id = req.params.id;

        const { user_id, product_id, quantity } = req.body;

        const cart = {
           user_id,
           product_id,
           quantity
        };

        Cart.updatecart(id, cart, (err, result) => {
            if (err) {
                return res.json({ message: err.message });
            }

            res.json({ message: "Product updated successfully" });
        });
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

function removeCart(req, res) {
    try {
        const id = req.params.id;

        Cart.deleteCart(id, (err, result) => {
            if (err) {
                return res.json({ message: err.message });
            }

            res.json({ message: "Cart deleted successfully" });
        });
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    addToCart,
    getCartById,
    updateCart,
    removeCart
};