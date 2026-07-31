const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");
const auth = require("../middleware/auth");
const customer = require("../middleware/customer");
const admin = require("../middleware/admin");

router.get("/", orderController.getOreders);
router.post("/", auth, customer, orderController.addOrders);
router.put("/:id", auth, customer, orderController.updateOrders);
router.delete("/:id", auth, customer, orderController.deleteOrders);
router.post("/checkout", auth, orderController.checkOut);
router.put("/:id/status", auth, orderController.orderStatus);
router.get("/history", auth, orderController.orderHistory);
router.put("/:id/status", auth, admin, orderController.changeOrderStatus)

module.exports = router;