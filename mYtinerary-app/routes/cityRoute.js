const express = require("express");
const router = express.Router();
const cityModel = require("../models/City");

router.get("/", (req, res) => {
  cityModel.find().then(cities => res.json(cities));
});

router.post("/", (req, res) => {
  // var cityModel = new CityModel(req.body);
  // cityModel.save();

  // This is a short way with mongoose method ".create".
  cityModel
    .create(req.body)
    .then(function(cities) {
      res.send(cities);
    })
    .catch(next);
  // cityModel.create(req.body).then(cities => res.send(cities);
  // });
});

module.exports = router;
