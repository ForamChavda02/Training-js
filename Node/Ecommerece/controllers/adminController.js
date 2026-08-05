const db = require("../db");
const AdminModel = require("../models/adminModel");

async function getDashboardSummary(req, res) {
    try{
        console.log("inside the getdashboard summary controler");
        const revenue = await AdminModel.getLifetimeRevenue();
        const pendingOrder = await AdminModel.getOrderStatsByStatus();
        const newUsers = await AdminModel.getNewUsersCount();
        const topCustomer = await AdminModel.getTopCustomer();
        const bestseller = await AdminModel.bestSeller();
        const lowstockAlert = await AdminModel.lowStock();
        const revenueWithupi = await AdminModel.revenueWithUPI();
        const revenueWithcard = await AdminModel.revenueWithCard();
        const revenueWithwallet = await AdminModel.revenueWithWallet();
        const cancle = await AdminModel.cancleOrder();
        const avg = await AdminModel.avgRevenue();

        res.json({
            totalRevenue: revenue,
            pendin_orders: pendingOrder,
            cancleOrder: cancle,
            new_users: newUsers,
            top_customer: topCustomer,
            best_seller: bestseller,
            low_stock_Alert: lowstockAlert,
            upi: revenueWithupi,
            card: revenueWithcard,
            wallet: revenueWithwallet,
            average: avg
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