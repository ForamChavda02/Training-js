const db = require("../db");

function getProducts(callback) {
    db.query("SELECT * FROM products", callback);
}

function createProduct(product, callback) {
    const sql = "INSERT INTO products (name, description, price, stock, image) VALUES (?, ?, ?, ?, ?)";

    db.query(sql,[product.name, product.description, product.price, product.stock, product.image], callback);
}

function updateProduct(productId, product, callback) {
    const sql = "UPDATE products SET name = ?, description = ?, price = ?, stock = ?, image = ? WHERE id = ?";
    db.query(sql, [ product.name, product.description, product.price, product.stock, product.image, productId], callback);
}

function deleteProduct(productId, callback) {
    db.query("DELETE FROM products WHERE id = ?", [productId], callback);
}

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
};