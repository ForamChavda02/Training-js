const otpModel = require("../models/otpModel");

async function sendOTP(req, res) {
    try {
        const { email } = req.body;
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

        await otpModel.saveOTP(email, otp, expiresAt);

        res.json({ 
            message: "OTP generated", 
            otp
        });
    }
    catch(error) {
        return res.status(500).json({ message: error.message });
    }
}

async function verifyOTP(req, res) {
    try {
        const { email, otp } = req.body;
        const result = await otpModel.findOTP(email, otp);
        if(!result) {
            return res.json({ message: "Invalid or expired OTP"});
        }

        await otpModel.deleteOTP(email);

        res.json({ message: "verification successful" });
    }
    catch(error) {
        return res.status(500).json({ message: error.message });
    }
}
 
module.exports = {
    sendOTP,
    verifyOTP
};