const db = require("../db");

async function getProducts(search, category, sort, page, limit) {
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
    const [rows] = await db.query(sql, value);
    return rows;
}

async function createProduct(product) {
    const sql = "INSERT INTO products (name, description, price, stock, image) VALUES (?, ?, ?, ?, ?)";

    const [result] = await db.query(sql,[product.name, product.description, product.price, product.stock, product.image]);

    return result;
}

async function updateProduct(productId, product) {
    const sql = "UPDATE products SET name = ?, description = ?, price = ?, stock = ?, image = ? WHERE id = ?";
    const [result] = await db.query(sql, [ product.name, product.description, product.price, product.stock, product.image, productId]);
    return result;
}

async function deleteProduct(productId) {
    await db.query("DELETE FROM products WHERE id = ?", [productId]);
}

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
};