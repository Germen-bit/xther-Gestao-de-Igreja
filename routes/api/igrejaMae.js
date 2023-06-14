const express = require("express");
const router = express.Router();
const {
  getIgrejaMae,
  setIgrejaMae,
} = require("../../controller/igrejaMaeController");
const { protect } = require("../../middleware/authMiddleware");

router.route("/").get(getIgrejaMae).post(setIgrejaMae);

module.exports = router;
