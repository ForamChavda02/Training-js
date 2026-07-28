const products = require("../data/product");
const db = require("../db");
const ProductModel = require("../models/productModel.js"); 

function getProducts(req, res) {
    try {
       const { search, category, sort } = req.query;
       const page = parseInt(req.query.page) || 1;
       const limit = parseInt(req.query.limit) || 1;

       ProductModel.getProducts(search, category, sort, page, limit, (err, result) => {
           if (err) {
               return res.json({ message: err.message });
           }
           res.json(result);
       });
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

function addProduct(req, res) {
    try {
        if(!req.file) {
            return res.json({ message: "please upload an image" });
        }
        const { name, description, price, stock } = req.body;
        const image = req.file.filename;
        console.log(req.body);
        console.log(req.file);

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
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

function updateProduct(req, res) {
    try {
       const productId = req.params.id;

       ProductModel.updateProduct(productId, req.body, (err, result) => {
           if (err) {
               return res.json({ message: err.message });
           }

           res.json(result);
       });
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
}

function deleteProduct(req, res) {
    try {
        const productId = req.params.id;

        ProductModel.deleteProduct(productId, (err, result) => {
            if (err) {
                return res.json({ message: err.message });
            }

            res.json({ message: "Product deleted successfully" });
        });
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