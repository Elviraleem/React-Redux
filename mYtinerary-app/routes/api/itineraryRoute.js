const express = require("express");
const router = express.Router();
const itineraryModel = require("../../models/Itinerary");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// get a list of itineraries from the database
router.get("/itineraries/:cityName", (req, res) => {
  itineraryModel.find().then(itinerary => res.json(itinerary.params.cityName));
});

router.post("/", upload.single("profileImage"), (req, res, next) => {
  console.log(req.file);
  itineraryModel
    .create(req.body)
    .then(itinerary => res.send(itinerary))
    .catch(next);
});

module.exports = router;
