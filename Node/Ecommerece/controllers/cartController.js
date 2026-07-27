const Cart = require("../models/cartModel");

function addToCart(req, res) {
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

//function addToCartWithCheckout(req, res) {}

function getCartById(req, res) {
    const userId = req.params.userId;

    Cart.getcartByid(userId, (err, result) => {
        if (err) {
            return res.json({ message: err.message });
        }

        res.json(result);
    });
}

function updateCart(req, res) {
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

function removeCart(req, res) {
    const id = req.params.id;

    Cart.deleteCart(id, (err, result) => {
        if (err) {
            return res.json({ message: err.message });
        }

        res.json({ message: "Cart deleted successfully" });
    });
}

module.exports = {
    addToCart,
    getCartById,
    updateCart,
    removeCart
};