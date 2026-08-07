const express = require("express");
const router = express.Router();

const apiController = require("../controllers/apikeyController");

router.post("/", apiController.createApiKey);
router.get("/", apiController.getApiKey);
router.put("/:id", apiController.upadteApiKey);
router.delete("/:id", apiController.deleteapiKey);

module.exports = router;