const express = require("express");
const router = express.Router();

const checkoutController = require("../controllers/checkoutController");

router.post("/:userId", checkoutController.checkOut);
router.delete("/cart/:id", checkoutController.deleteItem);

module.exports = router;