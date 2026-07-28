const express = require("express");
const products = require("../data/product");
const admin = require("../middleware/admin");
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.getProducts);
router.post("/", auth, admin, upload.single("image"), productController.addProduct);
router.put("/:id", auth, admin, productController.updateProduct);
router.delete("/:id", auth, admin, productController.deleteProduct);

module.exports = router;