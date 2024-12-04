const express = require("express");
const favoriteDriverController = require("../controller/favoriteDriverController");

const router = express.Router();
router.post("/add", favoriteDriverController.addFavorite);
router.post("/remove", favoriteDriverController.removeFavorite);
router.get("/:userId", favoriteDriverController.getFavorite);
router.get(
  "/details/:userId",
  favoriteDriverController.getDriverDetailsController
);
router.get("/check/status", favoriteDriverController.getFavoriteStatus);
module.exports = router;
