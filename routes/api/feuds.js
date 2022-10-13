const express = require("express");
const router = express.Router();
const feudCtrl = require("../../controllers/feuds");

// GET all posts
router.get("/", feudCtrl.index);

// POST new post
router.post("/", feudCtrl.create);

module.exports = router;
