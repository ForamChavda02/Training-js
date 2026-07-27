const express = require("express");
const products = require("../data/product");
const admin = require("../middleware/admin");
const auth = require("../middleware/auth");

const router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.getProducts);
router.post("/", auth, admin, productController.addProduct);
router.put("/:id", auth, admin, productController.updateProduct);
router.delete("/:id", auth, admin, productController.deleteProduct);

module.exports = router;