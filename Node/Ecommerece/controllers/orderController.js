const Oreder = require("../models/orderModel");

function getOreders(req, res) {
    Oreder.getAllOrders((err, result) => {
        if (err) {
            return res.json({ message: err.message });
        }

        res.json(result);
    });
}

function addOrders(req, res) {
    const { user_id, total_amount, status, shipping_address } = req.body;

    const order = {
        user_id,
        total_amount,
        status,
        shipping_address
    };

    Oreder.createOreder(order, (err, result) => {
        if (err) {
            return res.json({ message: err.message });
        }

        res.json({ message: "Product added into cart" });
    });
}
function updateOrders(req, res) {
    console.log("Body:", req.body);
    console.log("Params:", req.params);

    const orderId = req.params.id;
    const { user_id, total_amount, status, shipping_address } = req.body;

    console.log(user_id, total_amount, status, shipping_address);

    const order = {
        user_id,
        total_amount,
        status,
        shipping_address
    };

    console.log(order);

    Oreder.updatedOrder(orderId, order, (err, result) => {
        if (err) {
            return res.json({ message: err.message });
        }

        res.json(result);
    });
}

function deleteOrders(req, res) {
    const orderId = req.params.id;

    Oreder.deleteOrder(orderId, (err, result) => {
        if (err) {
            return res.json({ message: err.message });
        }

        res.json({ message: "Order removed successfully" });
    });
}

module.exports = {
    getOreders,
    addOrders,
    updateOrders,
    deleteOrders
};