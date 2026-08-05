const db = require("../db");
const paymentModel = require("../models/paymentModel");

async function addPayment(req, res) {
    try {
        const { order_id, payment_id, amount, method, status } = req.body;
        const payment = {
            order_id, 
            payment_id,
            amount,
            method,
            status
        };
        await paymentModel.createPayment(payment);
        res.json({ message: "Payment successful" });
    }
    catch (error) {
        return res.json({ message: error.message });
    }
}

async function getYourPayment(req, res) {
    try {
        const paymentId = req.params.paymentId;
        const result = await paymentModel.getPaymentById(paymentId);
        res.json(result);
    }
    catch (error) {
        return res.json({ message: error.message });
    }
}

async function refundPayment(req, res) {
    try {
        const paymentId = req.params.paymentId;
        const { status } = req.body;
        const payment = { status };
        await paymentModel.refundPayment(paymentId, payment);
        res.json({ message: "refunded your amount" });
    }
    catch(error) {
        return res.json({ message: error.message });
    }
}

async function deletePayment(req, res) {
    try {
        const paymentId = req.params.paymentId;
        await paymentModel.deletePendingPayment(paymentId);
        res.json({ message: "payment deleted with status failure" });
    }
    catch (error) {
        return res.json({ message: error.message });
    }
}

async function paymentSuccess(req, res) {
    try {
        const { paymentId, status }= req.params.paymentId;
        const result = await paymentModel.isPaymentSuccessful(paymentId, status);
        res.json(result);
    }
    catch (error) {
        return res.json({ message: error.message });
    }
}

module.exports = {
    addPayment,
    getYourPayment,
    refundPayment,
    deletePayment,
    paymentSuccess
};