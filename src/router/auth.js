const express = require("express");
const upload = require("../utils/multer");
const {
  register,
  login,
  refreshTokenRequest,
  getAllUsers,
  getUserById,
  blockUser,
  googleAuth,
  googleAuthCallback,
  facebookAuth,
  facebookAuthCallback,
  updateUserController,
  changePasswordUser,
  getUserByRoleDriverController,
  searchUsersController,
  updateBalanceController,
  getTransactions,
  unlockUser,
  resetPasswordController,
  getAllCustomers,
  addStaff,
  getAllStaff,
} = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
// https://xetai-be.vercel.app//auth/register
router.post("/register", register);
// https://xetai-be.vercel.app//auth/login
router.post("/login", login);
// https://xetai-be.vercel.app//auth/refresh-token
router.post("/refresh-token", refreshTokenRequest);
// https://xetai-be.vercel.app//auth/users
router.get("/users", getAllUsers);
// https://xetai-be.vercel.app//auth/user/:id
router.get("/user/:id", getUserById);
// https://xetai-be.vercel.app//auth/user/:id/block
router.put("/user/:id/block", blockUser);
// https://xetai-be.vercel.app//auth/user/:id/unlock
router.put("/user/:id/unlock", unlockUser);
// https://xetai-be.vercel.app//auth/google
router.get("/google", googleAuth);
// https://xetai-be.vercel.app//auth/google/callback
router.get("/google/callback", googleAuthCallback);
// https://xetai-be.vercel.app//auth/facebook
router.get("/facebook", facebookAuth);
// https://xetai-be.vercel.app//auth/facebook/callback
router.get("/facebook/callback", facebookAuthCallback);
// https://xetai-be.vercel.app//auth/update-user
router.put("/update-user/:id", upload.single("avatar"), updateUserController);
// https://xetai-be.vercel.app//auth/change-password
router.put("/change-password", authMiddleware, changePasswordUser);
// https://xetai-be.vercel.app//auth/role/:role
router.get("/role/driver", getUserByRoleDriverController);
// https://xetai-be.vercel.app//auth/search
router.get("/search", searchUsersController);
// https://xetai-be.vercel.app//auth/balance
router.put("/balance", updateBalanceController);
// https://xetai-be.vercel.app//auth/transaction/:id
router.get("/transaction/:userId", getTransactions);
// https://xetai-be.vercel.app//auth/forgotPassword
router.post("/resetPassword", resetPasswordController);
// https://xetai-be.vercel.app//auth/users/customer
router.get("/users/customer", getAllCustomers);
// https://xetai-be.vercel.app//auth/users/add-staff
router.post("/users/add-staff", addStaff);
// https://xetai-be.vercel.app//auth/users/getAllStaff
router.get("/users/getAllStaff", getAllStaff);
module.exports = router;
