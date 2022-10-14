const express = require("express");
const router = express.Router();
const feudCtrl = require("../../controllers/feuds");

// GET all teams
router.get("/", feudCtrl.index);

// POST new team
router.post("/warfeud/new", feudCtrl.create);

module.exports = router;
