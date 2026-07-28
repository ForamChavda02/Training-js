const Oreder = require("../models/orderModel");
const orderEvents = require("../events/orderEvents");
// const sendEmail = require("../sendEmail");
function getOreders(req, res) {
    try {
        Oreder.getAllOrders((err, result) => {
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

function addOrders(req, res) {
    try {
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
            orderEvents.emit("orderPlaced", {
                orderId: result.insertedId,
                userId: user_id,
                total: total_amount
            });

            // const customerEmail = req.user.email;
            // sendEmail(
            //     customerEmail,
            //     "Order confirmed",
            //     "Your order has been places successfully"
            // );

            res.json({ message: "Product added into cart", orderId: result.insertedId});
        });
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

function updateOrders(req, res) {
    try {
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
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

function deleteOrders(req, res) {
    try {
        const orderId = req.params.id;

        Oreder.deleteOrder(orderId, (err, result) => {
            if (err) {
                return res.json({ message: err.message });
            }

            res.json({ message: "Order removed successfully" });
        });
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getOreders,
    addOrders,
    updateOrders,
    deleteOrders
};