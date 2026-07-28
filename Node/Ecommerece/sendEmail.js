const nodemailer = require("nodemailer");
const trasnporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "foramchavda52@gmail.com",
        pass: "app_password"
    }
});

function sendEmail(to, subject, text) {
    trasnporter.sendMail({
        from: "foramc.expert@gmail.com",
        to,
        subject,
        text
    });
}

module.exports = sendEmail;