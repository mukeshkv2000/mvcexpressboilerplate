const express = require("express");
const router = express.Router();

const landingControlller = require("../controller/landingController");

// Landing Page Route
router.get("/", landingControlller.land);
// router.get("*", pageNotFoundController.land);
router.post("/add", landingControlller.addMember);
router.get("/ajax", function(req, res) {
  res.render("ajax", { title: "An Ajax Example", quote: "AJAX is great!" });
});
router.post("/ajax", function(req, res) {
  res.render("ajax", { title: "An Ajax Example", quote: req.body.quote });
});
router.get("/show", landingControlller.listMember);
module.exports = router;
