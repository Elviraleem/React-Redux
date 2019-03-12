const express = require("express");
const router = express.Router();
const cityModel = require("../models/City");

router.get("/", (req, res) => {
  cityModel.find().then(cities => res.json(cities));
});

module.exports = router;
