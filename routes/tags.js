const express = require("express");
const router = express.Router();
const faketags = require("../data/tags")

router.get('/', (req, res) => {
    res.json(faketags);
  });

module.exports = router;