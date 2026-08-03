const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const couponController = require("../controllers/couponController");

router.get("/", couponController.getCoupons);
router.post("/", couponController.addCoupon);
router.put("/:id", couponController.updateCoupon);
router.delete("/:id", couponController.deleteCoupon);
router.post("/apply", couponController.applyCoupon);

module.exports = router;