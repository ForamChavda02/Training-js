const axios = require("axios");

async function getProducts(req, res) {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");

        res.json(response.data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getProducts
};