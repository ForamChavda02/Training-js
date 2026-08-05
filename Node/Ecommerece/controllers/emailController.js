const resend = require("../config/resend");

async function sendEmail(req, res) {
    try {
        const { email, name } = req.body;

        const response = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: email,
            subject: "Welcome to our ecommerec store",
            html: `<h2>Hello ${name}</h2>
                  <p>Welcome to our store!</p>`
        });
        res.json(response);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { 
    sendEmail
};