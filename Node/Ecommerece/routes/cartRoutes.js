const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");

router.get("/:userId", cartController.getCartById);
router.post("/", cartController.addToCart);
router.put("/:id", cartController.updateCart);
router.delete("/:id", cartController.removeCart);

module.exports = router;