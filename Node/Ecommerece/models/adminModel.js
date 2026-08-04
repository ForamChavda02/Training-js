const db = require("../db");

async function getLifetimeRevenue() {
    try{
        console.log("inside model: getLifetimeRevenue");
        const sql = `SELECT SUM(total_amount) FROM orders WHERE status = "delivered"`;
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
        const sql = `SELECT COUNT(id) FROM orders WHERE status = "pending"`;
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



module.exports = {
    getLifetimeRevenue,
    getOrderStatsByStatus,
    getMonthlySalesTrend,
    getNewUsersCount,
    getTopCustomer
};