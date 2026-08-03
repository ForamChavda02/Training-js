const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const userController = require("../controllers/userController");

router.get("/", userController.getUsers);
router.post("/", userController.signUser);
router.post("/login", userController.loginUser);
router.post("/logout", userController.logoutUser);
router.put("/change-email", auth, userController.changeEmail);
router.put("/:id", auth, userController.updateUser);
router.delete("/:id", auth, userController.deleteUser);
router.post("/forget-password", userController.forgetPassword);
router.post("/reset-password", userController.resetPassword);
router.post("/change-password", auth, userController.changePassword);
router.post("/verify-change-email", auth, userController.verifyChangeEmail);

module.exports = router;