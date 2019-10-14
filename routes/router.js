const express = require("express");
const router = express.Router();

const landingControlller = require("../controller/landingController");

// Landing Page Route
router.get("/", landingControlller.land);
// router.get("*", pageNotFoundController.land);
router.post("/add", landingControlller.addMember);

router.get("/show", landingControlller.listMember);
module.exports = router;
