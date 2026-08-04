const db = require("../db");
const AdminModel = require("../models/adminModel");

async function getDashboardSummary(req, res) {
    try{
        console.log("inside the getdashboard summary controler");
        const revenue = await AdminModel.getLifetimeRevenue();
        const pendingOrder = await AdminModel.getOrderStatsByStatus();
        const newUsers = await AdminModel.getNewUsersCount();
        const topCustomer = await AdminModel.getTopCustomer();

        res.json({
            totalRevenue: revenue,
            pendin_orders: pendingOrder,
            new_users: newUsers,
            top_customer: topCustomer
        });
    }
    catch (error) {
        return res.json({ message: error.message });
    }
}

async function getSalesAnalytics(req, res) {
    try {
        const montlySale = await AdminModel.getMonthlySalesTrend();
        res.json({ monthly_sale: montlySale });
    }
    catch (error) {
        return res.json({ message: error.message });
    }
}

module.exports = {
    getDashboardSummary,
    getSalesAnalytics
};