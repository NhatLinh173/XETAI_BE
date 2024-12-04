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
// http://https://xetai-be.vercel.app//auth/register
router.post("/register", register);
// http://https://xetai-be.vercel.app//auth/login
router.post("/login", login);
// http://https://xetai-be.vercel.app//auth/refresh-token
router.post("/refresh-token", refreshTokenRequest);
// http://https://xetai-be.vercel.app//auth/users
router.get("/users", getAllUsers);
// http://https://xetai-be.vercel.app//auth/user/:id
router.get("/user/:id", getUserById);
// http://https://xetai-be.vercel.app//auth/user/:id/block
router.put("/user/:id/block", blockUser);
// http://https://xetai-be.vercel.app//auth/user/:id/unlock
router.put("/user/:id/unlock", unlockUser);
// http://https://xetai-be.vercel.app//auth/google
router.get("/google", googleAuth);
// http://https://xetai-be.vercel.app//auth/google/callback
router.get("/google/callback", googleAuthCallback);
// http://https://xetai-be.vercel.app//auth/facebook
router.get("/facebook", facebookAuth);
// http://https://xetai-be.vercel.app//auth/facebook/callback
router.get("/facebook/callback", facebookAuthCallback);
// http://https://xetai-be.vercel.app//auth/update-user
router.put("/update-user/:id", upload.single("avatar"), updateUserController);
// http://https://xetai-be.vercel.app//auth/change-password
router.put("/change-password", authMiddleware, changePasswordUser);
// http://https://xetai-be.vercel.app//auth/role/:role
router.get("/role/driver", getUserByRoleDriverController);
// http://https://xetai-be.vercel.app//auth/search
router.get("/search", searchUsersController);
// http://https://xetai-be.vercel.app//auth/balance
router.put("/balance", updateBalanceController);
// http://https://xetai-be.vercel.app//auth/transaction/:id
router.get("/transaction/:userId", getTransactions);
// http://https://xetai-be.vercel.app//auth/forgotPassword
router.post("/resetPassword", resetPasswordController);
// http://https://xetai-be.vercel.app//auth/users/customer
router.get("/users/customer", getAllCustomers);
// http://https://xetai-be.vercel.app//auth/users/add-staff
router.post("/users/add-staff", addStaff);
// http://https://xetai-be.vercel.app//auth/users/getAllStaff
router.get("/users/getAllStaff", getAllStaff);
module.exports = router;
