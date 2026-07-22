const products = require("../data/product");
const db = require("../db");
const ProductModel = require("../models/productModel.js"); 

function getProducts(req, res) {
    ProductModel.getProducts((err, result) => {
        if(err) {
            res.json({ message: err.message });
        }
        res.json(result);
    });
}

function addProduct(req, res) {
    const { name, description, price, stock, image } = req.body;
    console.log(req.body);
    const sql = "INSERT INTO products (name, description, price, stock, image) VALUES(?, ?, ?, ?, ?);";
    db.query(sql, [name, description, price, stock, image], (err, result) => {
        if(err) {
            return res.json({ message: err.message });
        }
        res.status(201).json({ message: "product aaded successfully" });
    });
}

function updateProduct(req, res) {
    const productId  = req.params.id;
    const {name, description, price, stock, image} = req.body;

    const sql = "UPDATE products SET name = ?, description = ?, price = ?, stock = ?, image = ? WHERE id = ?;";
    db.query(sql, [name, description, price, stock, image, productId], (err, result) => {
        if(err) {
            return res.json({ message: err.message });
        }
        res.json(result);
    });
}

function deleteProduct(req, res) {
   const productId = req.params.id;
   const sql = "DELETE FROM products WHERE id = ?;";
   
   db.query(sql, [productId], (err, result) => {
    if(err) {
        return res.json({ message: err.message });
    }
    res.json({ message: "product deleted successfully" });
   });
}

module.exports = {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct
}