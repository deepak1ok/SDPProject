import express from "express";

import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile,
  deleteUserById,
  getUserById,
  updateUserById,
  loginNgo,
  otpMailValidator,
  sendOtp,
  verifyOtp
} from "../controllers/userController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(createUser)
  .get(authenticate, authorizeAdmin, getAllUsers);
router.post("/auth", loginUser);
router.post("/ngologin", loginNgo);
router.post("/logout", logoutCurrentUser);
router
  .route("/profile")
  .get(authenticate, getCurrentUserProfile)
  .put(authenticate, updateCurrentUserProfile);

// sign up

router.post("/signup", createUser);
// ADMIN ROUTES 👇
router
  .route("/:id")
  .delete(authenticate, authorizeAdmin, deleteUserById)
  .get(authenticate, authorizeAdmin, getUserById)
  .put(authenticate, authorizeAdmin, updateUserById);

  router.post("/send-otp",sendOtp);

  router.post("/verify-otp",verifyOtp);

export default router;
