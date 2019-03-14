const express = require("express");
const router = express.Router();
const cityModel = require("../../models/City");

// get a list of cities from the database
router.get("/", (req, res) => {
  cityModel.find().then(cities => res.json(cities));
});

// add a new city in the database
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

// update a city in the database
router.put("/:id", function(req, res, next) {
  cityModel
    .findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function() {
      cityModel.findOne({ _id: req.params.id }).then(function(city) {
        res.send(city);
      });
    });
});

// delete a city from the database
router.delete("/:id", function(req, res, next) {
  cityModel.findByIdAndRemove({ _id: req.params.id }).then(function(city) {
    res.send(city);
  });
});

module.exports = router;
