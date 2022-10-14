const express = require("express");
const router = express.Router();
const feudCtrl = require("../../controllers/feuds");

router.get("/", feudCtrl.index);
router.post("/", feudCtrl.create);

module.exports = router;
