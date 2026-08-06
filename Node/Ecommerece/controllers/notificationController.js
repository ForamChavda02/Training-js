const notificationModel = require("../models/notificationModel");

async function createNotification(req, res) {
    try {
        const { user_id, title, message, is_read } = req.body;
        const not = {
            user_id,
            title, 
            message, 
            is_read
        };
        await notificationModel.createNotification(not);
        res.json({ message: "notification sent" });
    }
    catch(error) {
        return res.json({ message: error.message });
    }
}

async function getNotification(req, res) {
    try {
        const userId = req.params.userId;
        const [result] = await notificationModel.getNotificationByUser(userId);
        res.json(result);
    }
    catch(error) {
        return res.json({ message: error.message });
    }
}

async function markAsRead(req, res) {
    try {
        const userId = req.params.userId;
        await notificationModel.markAsRead(userId);
        res.json({ message: "mark as read" });
    }
    catch(error) {
        return res.json({ message: error.message });
    }
}

async function deleteNotification(req, res) {
    try {
        const userId = req.params.userId;
        await notificationModel.deleteNotification(userId);
        res.json({ message: "notification deleted" });
    }
    catch (error) {
        return res.json({ message: error.message });
    }
}

module.exports = {
    createNotification,
    getNotification,
    markAsRead,
    deleteNotification
};