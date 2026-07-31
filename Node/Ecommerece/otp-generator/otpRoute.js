const express = require("express");
const router = express.Router();

const {
    sendOTP,
    verifyOTP,
    resendOTP,
    deleteOTP
} = require("./otpController");

router.post("/send", sendOTP);
router.post("/verify", verifyOTP);
router.post("/resend", resendOTP);
router.delete("/:email", deleteOTP);

module.exports = router;