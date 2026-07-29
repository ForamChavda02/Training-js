const Cart = require("../models/cartModel");
const { validateCart } = require("../validator/cartValidator");

async function addToCart(req, res) {
    try {
        const { user_id, product_id, quantity } = req.body;

        const error = validateCart(req.body);
        if(error) {
            return res.status(400).json({ message: error });
        }

        const cart = {
            user_id,
            product_id,
            quantity
        };

       await Cart.addtoCart(cart);
       
       res.json({ message: "item added to cart" });
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

async function getCartById(req, res) {
    try {
        const userId = req.params.userId;

       const result = await Cart.getcartByid(userId);

       res.json(result);
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

async function updateCart(req, res) {
    try {
        const id = req.params.id;

        const { user_id, product_id, quantity } = req.body;

        const cart = {
           user_id,
           product_id,
           quantity
        };

       await Cart.updatecart(id, cart);

       res.json({ message: "cart updated successfully" });
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

async function removeCart(req, res) {
    try {
        const id = req.params.id;

        Cart.deleteCart(id);

        res.json({ message: "Cart deleted successfully" });
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