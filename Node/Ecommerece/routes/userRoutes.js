const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/", userController.getUsers);
router.post("/", userController.signUser);
router.post("/login", userController.loginUser);
router.post("/logout", userController.logoutUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.post("/forget-password", userController.forgetPassword);
router.post("/reset-password", userController.resetPassword);
router.post("/change-password", userController.changePassword);

module.exports = router;