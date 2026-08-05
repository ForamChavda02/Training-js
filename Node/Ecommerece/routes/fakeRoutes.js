const express = require("express");
const router = express.Router();

const fakeStoreController = require("../controllers/fakeController");

router.get("/products", fakeStoreController.getProducts);

module.exports = router;