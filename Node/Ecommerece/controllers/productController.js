const products = require("../data/product");
const db = require("../db");
const ProductModel = require("../models/productModel.js"); 

function getProducts(req, res) {
    ProductModel.getProducts((err, result) => {
        if (err) {
            return res.json({ message: err.message });
        }

        res.json(result);
    });
}

function addProduct(req, res) {
    const { name, description, price, stock, image } = req.body;

    const product = {
        name,
        description,
        price,
        stock,
        image
    };

    ProductModel.createProduct(product, (err, result) => {
        if (err) {
            return res.json({ message: err.message });
        }

        res.json({ message: "Product added successfully" });
    });
}

function updateProduct(req, res) {
    const productId = req.params.id;

    ProductModel.updateProduct(productId, req.body, (err, result) => {
        if (err) {
            return res.json({ message: err.message });
        }

        res.json(result);
    });
}

function deleteProduct(req, res) {
    const productId = req.params.id;

    ProductModel.deleteProduct(productId, (err, result) => {
        if (err) {
            return res.json({ message: err.message });
        }

        res.json({ message: "Product deleted successfully" });
    });
}

module.exports = {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct
};