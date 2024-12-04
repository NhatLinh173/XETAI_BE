const express = require("express");
const favoriteDriverController = require("../controller/favoriteDriverController");

const router = express.Router();
// http://https://xetai-be.vercel.app//favorites/add
router.post("/add", favoriteDriverController.addFavorite);
// http://https://xetai-be.vercel.app//favorites/remove
router.post("/remove", favoriteDriverController.removeFavorite);
// http://https://xetai-be.vercel.app//favorites/:userId
router.get("/:userId", favoriteDriverController.getFavorite);
// http://https://xetai-be.vercel.app//driver/:userId
router.get(
  "/details/:userId",
  favoriteDriverController.getDriverDetailsController
);
router.get("/check/status", favoriteDriverController.getFavoriteStatus);
module.exports = router;
