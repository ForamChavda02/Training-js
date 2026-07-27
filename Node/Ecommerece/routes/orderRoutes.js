const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");
const auth = require("../middleware/auth");
const customer = require("../middleware/customer");

router.get("/", orderController.getOreders);
router.post("/", auth, customer, orderController.addOrders);
router.put("/:id", auth, customer, orderController.updateOrders);
router.delete("/:id", auth, customer, orderController.deleteOrders);

module.exports = router;