const db = require("../db");

async function getLifetimeRevenue() {
    try{
        console.log("inside model: getLifetimeRevenue");
        const sql = `SELECT SUM(total_amount) AS total_amount FROM orders WHERE status = "delivered"`;
        const [rows] = await db.query(sql);
        return rows;
        console.log("inside model: completed getLifetimeRevenue");
    }
    catch(error) {
        throw error;
    }
}

async function getOrderStatsByStatus() {
    try {
        console.log("inside model: getOrderStatsByStatus");
        const sql = `SELECT COUNT(id) AS pendig_orders FROM orders WHERE status = "pending"`;
        const [rows] = await db.query(sql);
        return rows;
    }
    catch(error) {
        throw error;
    }
}

async function getMonthlySalesTrend() {
    try {
        console.log("inside model: getMontlySalesTrend");
        const sql = `SELECT 
        YEAR(created_at) AS order_year,
        MONTH(created_at) AS order_month,
        COUNT(*) AS total_sales
        FROM orders
        GROUP BY YEAR(created_at), MONTH(created_at)
        ORDER BY order_year, order_month`;

        const [rows] = await db.query(sql);
        return rows;
    }
    catch(error) {
        throw error;
    }
}

async function getNewUsersCount() {
    try {
        console.log("inside model: getNewUsersCount")
        const sql = `
        SELECT COUNT(user_id) AS weekly_user_count
        FROM orders
        WHERE created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)`;

        const [rows] = await db.query(sql);
        return rows;
    }
    catch (error) {
        throw error;
    }
}

async function getTopCustomer() {
    try {
        const sql = `
        SELECT user_id, COUNT(*) AS total_orders
        FROM orders 
        GROUP BY user_id
        ORDER BY total_orders DESC
        LIMIT 1`;
        const [rows] = await db.query(sql);
        return rows;
    }
    catch(error) {
        throw error;
    }
}

async function bestSeller() {
    try {
        const sql = `
        SELECT p.name,
        SUM(oi.quantity) AS sold
        FROM order_items oi
        JOIN products p
        ON oi.product_id = p.id
        GROUP BY oi.product_id
        ORDER BY sold DESC 
        LIMIT 5`;
        const [rows] = await db.query(sql);
        return rows;
    }
    catch (error) {
        throw error;
    }
}

async function lowStock() {
    try {
        const sql = `SELECT * FROM products WHERE stock < 5`;
        const [rows] = await db.query(sql);
        return rows;
    }
    catch(error) {
        throw error;
    }
}

async function revenueWithUPI() {
    try {
        const sql = `SELECT SUM(amount) AS UPI FROM payments WHERE method = "upi"`;
        const [rows] = await db.query(sql);
        return rows;
    }
    catch(error) {
        throw error;
    }
}

async function revenueWithCard() {
    try {
        const sql = `SELECT SUM(amount) AS Card FROM payments WHERE method = "card"`;
        const [rows] = await db.query(sql);
        return rows;
    }
    catch (error) {
        throw error;
    }
}

async function revenueWithWallet() {
    try {
        const sql = `SELECT SUM(amount) AS Wallet FROM payments WHERE method = "wallet"`;
        const [rows] = await db.query(sql);
        return rows;
    }
    catch (error) {
        throw error;
    }
}

async function cancleOrder() {
    try {
        const sql = `SELECT SUM(id) AS canclled_order FROM orders WHERE status = "cancle"`;
        const [rows] = await db.query(sql);
        return rows;
    }
    catch(error) {
        throw error;
    }
}

async function avgRevenue() {
    try {
        const sql = `SELECT AVG(total_amount) AS average FROM orders`;
        const [rows] = await db.query(sql);
        return rows;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getLifetimeRevenue,
    getOrderStatsByStatus,
    getMonthlySalesTrend,
    getNewUsersCount,
    getTopCustomer,
    bestSeller,
    lowStock,
    revenueWithUPI,
    revenueWithCard,
    revenueWithWallet,
    cancleOrder,
    avgRevenue
};