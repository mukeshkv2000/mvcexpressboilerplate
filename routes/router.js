const express = require("express");
const router = express.Router();

const landingControlller = require("../controller/landingController");

// Landing Page Route
router.get("/", landingControlller.land);
// router.get("*", pageNotFoundController.land);

module.exports = router;
