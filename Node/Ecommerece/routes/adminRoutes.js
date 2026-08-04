const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/summary", adminController.getDashboardSummary);
router.get("/analytics", adminController.getSalesAnalytics);

module.exports = router;