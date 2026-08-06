const cron = require("node-cron");
const otpModel = require("../models/otpModel");
const couponModel = require("../models/couponModel");
const paymentModel = require("../models/paymentModel");

cron.schedule("0 0 * * *", async() => {
    console.log("running schedule jobs...");

    await otpModel.deleteExpiredOTP();
    await couponModel.expiresCoupon();
    await paymentModel.deleteFailedPayment();

    console.log("Daily jobs completed");
});