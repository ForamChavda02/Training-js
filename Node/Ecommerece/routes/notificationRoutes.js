const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

router.post("/", notificationController.createNotification);
router.get("/:userId", notificationController.getNotification);
router.put("/:userId/read", notificationController.markAsRead);
router.delete("/:userId", notificationController.deleteNotification);

module.exports = router;