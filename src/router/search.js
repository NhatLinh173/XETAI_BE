const express = require("express");
const router = express.Router();
const searchController = require("../controller/SearchController");

router.get("/", searchController.searchByStartPointAndDestination);
router.get("/driver-post", searchController.searchPostDriver);
module.exports = router;
