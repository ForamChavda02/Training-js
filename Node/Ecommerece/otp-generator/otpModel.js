const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
    email: { type: String, required: true },
    oyp: { type: String, required: true }
});

const otps = mongoose.model("otps", otpSchema);
module.exports = otps;