const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.post("/", paymentController.addPayment);
router.get("/:paymentId", paymentController.getYourPayment);
router.put("/refund/:paymentId", paymentController.refundPayment);
router.delete("/:paymentId", paymentController.deletePayment);
router.get("/:paymentId/:status", paymentController.paymentSuccess);

module.exports = router;