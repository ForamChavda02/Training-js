const db = require("../db");

function getProducts(search, category, sort, page, limit, callback) {
    let sql = "SELECT * FROM products WHERE 1=1";
    let value = [];

    if(search) {
        sql += " AND name LIKE ?";
        value.push(`%${search}%`);
    }
    if(category) {
        sql += " AND category = ?";
        value.push(category);
    }
    if(sort === "asc") {
        sql += " ORDER BY price ASC";
    }
    else if(sort === "desc") {
        sql += " ORDER BY price DESC";
    }

    const offset = (page - 1) * limit;
    sql += " LIMIT ? OFFSET ?";
    value.push(limit);
    value.push(offset);
    db.query(sql, value, callback);
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