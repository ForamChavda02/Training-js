const products = require("../data/product");
const db = require("../db");
const ProductModel = require("../models/productModel.js"); 
const { validateProduct } = require("../validator/productValidator.js");

async function getProducts(req, res) {
    try {
       const { search, category, sort } = req.query;
       const page = parseInt(req.query.page) || 1;
       const limit = parseInt(req.query.limit) || 1;

       const result = await ProductModel.getProducts(search, category, sort, page, limit);
       res.json(result);
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

async function addProduct(req, res) {
    try {
        console.log(req.file);
        if(!req.file) {
            return res.json({ message: "please upload an image" });
        }
        const { name, description, price, stock } = req.body;
        const error = validateProduct(req.body);
        if(error) {
            return res.status(400).json({ message: error });
        }
        const image = req.file.path;
        console.log(req.body);
        console.log(req.file);

        const product = {
           name,
           description,
           price,
           stock,
           image
        };

        await ProductModel.createProduct(product);
        res.json({ message: "product added successfully" });
    } 
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

async function updateProduct(req, res) {
    try {
       const productId = req.params.id;

       const result = await ProductModel.updateProduct(productId);

       res.json(result);

    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

async function deleteProduct(req, res) {
    try {
        const productId = req.params.id;

        await ProductModel.deleteProduct(productId);

        res.json({ message: "Product deleted successfully" });
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct
};