const Oreder = require("../models/orderModel");
const orderEvents = require("../events/orderEvents");
// const sendEmail = require("../sendEmail");
const { validateOrder } = require("../validator/orderValidator");

async function getOreders(req, res) {
    try {
        const result = await Oreder.getAllOrders();

        res.json(result);
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

async function addOrders(req, res) {
    try {
        const { user_id, total_amount, status, shipping_address } = req.body;

        const error = validateOrder(req.body);
        if(error) {
            return res.status(400).json({ message: error });
        }

        const order = {
            user_id,
            total_amount,
            status,
            shipping_address
        };

        const result = await Oreder.createOreder(order);
        
            orderEvents.emit("orderPlaced", {
                orderId: result.insertId,
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
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

async function updateOrders(req, res) {
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

        const result = await Oreder.updatedOrder(orderId, order);
        res.json(result);
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

async function deleteOrders(req, res) {
    try {
        const orderId = req.params.id;

        await Oreder.deleteOrder(orderId);

        res.json({ message: "order removed successfully" });
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