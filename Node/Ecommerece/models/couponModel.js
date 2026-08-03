const db = require("../db");

async function createCoupon(coupon) {
    const sql = `INSERT INTO coupons(code, discount, type, min_amount, expiry_date, is_active) VALUES (?, ?, ?, ?, ?, ?)`;
    const [result] = await db.query(sql, [
        coupon.code,
        coupon.discount,
        coupon.type,
        coupon.min_amount,
        coupon.expiry_date,
        coupon.is_active
    ]);

    return result;
}

async function getCoupons() {
    const sql = `SELECT * FROM coupons`;
    const [rows] = await db.query(sql);
    return rows;
}

async function getCouponByCode(code) {
    const sql = `SELECT * FROM coupons WHERE code = ?`;
    const [rows] = await db.query(sql, [code]);
    return rows;
}

async function updateCoupon(id, coupon) {
    const sql = `UPDATE coupons SET code = ?, discount = ?, type = ?, min_amount = ?, expiry_date = ?, is_active = ? WHERE id = ?`;
    const [result] = await db.query(sql, [
        coupon.code,
        coupon.discount,
        coupon.type,
        coupon.min_amount,
        coupon.expiry_date,
        coupon.is_active,
        id
    ]);
    return result;
}

async function deleteCoupon(id) {
    const sql = `DELETE FROM coupons WHERE id = ?`;
    const [result] = await db.query(sql, [id]);
    return result;
}

async function getCartTotal(userId) {
    const sql = `SELECT SUM(products.price * cart.quantity) AS total
    FROM cart
    JOIN products ON cart.product_id = products.id
    WHERE cart.user_id = ?`;

    const [rows] = await db.query(sql, [userId]);
    return rows;
}

module.exports = {
    createCoupon, 
    getCoupons,
    getCouponByCode,
    updateCoupon,
    deleteCoupon,
    getCartTotal
};