const db = require("../db");

async function addReview(reviews) {
    try {
        const sql = `INSERT INTO reviews (user_id, product_id, rating, review) VALUES (?, ?, ?, ?)`;
        const [result] = await db.query(sql, [
            reviews.user_id,
            reviews.product_id,
            reviews.rating,
            reviews.review
        ]);
        return result;
    }
    catch (error) {
        throw error;
    }
}

async function getReviewByProduct(productId) {
    try {
        const sql = `SELECT * FROM reviews WHERE product_id = ?`;
        const [rows] = await db.query(sql, [productId]);
        return rows;
    }
    catch (error) {
        throw error;
    }
}

async function getReviewById(id) {
    try {
        const sql = `SELECT * FROM reviews WHERE id = ?`;
        const [rows] = await db.query(sql, [id]);
        return rows;
    }
    catch(error) {
        throw error;
    }
}

async function updateReview(id, reviews) {
    try { 
        const sql = `UPDATE reviews SET user_id = ?, product_id = ?, rating = ?, review = ? WHERE id = ?`;
        const [result] = await db.query(sql, [
            reviews.user_id,
            reviews.product_id,
            reviews.rating,
            reviews.review,
            id
        ]);
        return result;
    }
    catch(error) {
        throw error;
    }
}

async function deleteReview(id) {
    try {
        const sql = `DELETE FROM reviews WHERE id = ?`;
        const [result] = await db.query(sql, [id]);
        return result;
    }
    catch(error) {
        throw error;
    }
}

module.exports = { addReview, getReviewByProduct, getReviewById, updateReview, deleteReview };