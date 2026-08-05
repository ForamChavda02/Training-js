const axios = require("axios");

async function convertPrice(req, res) {
    try {
        const { amount, from, to} = req.query;

        if(!amount || !from || !to) {
            return res.status(500).json({ message: "amount, from and to are required" });
        }
        const respones = await axios.get(`http://open.er-api.com/v6/latest/${from}`);

        const rate = respones.data.rates[to];

        if(!rate) {
            return res.json({ message: "invalid currency" });
        }

        const convertedAmount = amount * rate;

        res.json({
            from,
            to,
            amount: Number(amount),
            exchangeRate: rate,
            convertedAmount
        });
    }
    catch (error) {
        return res.json({ message: error.message });
    }
}

module.exports = {
    convertPrice
};