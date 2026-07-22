const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");
//const auth = require("../middleware/auth");

router.get("/", orderController.getOreders);
router.post("/", orderController.addOrders);
router.put("/:id", orderController.updateOrders);
router.delete("/:id", orderController.deleteOrders);

module.exports = router;