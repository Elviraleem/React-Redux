const express = require("express");
const router = express.Router();
const itineraryModel = require("../../models/Itinerary");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    console.log(file);
    console.log(req.file);
    cb(null, file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
    //Accepts only files with that size and 5Mb
  },
  fileFilter: fileFilter
});

// get a list of itineraries from the database
router.get("/:city", (req, res) => {
  console.log(req.params);
  itineraryModel
    .find({ cityName: req.params.city })
    .then(itinerary => res.json(itinerary));
});

// add a new itinerary to the database
router.post("/", upload.single("profileImage"), (req, res, next) => {
  console.log(req.file);
  req.body.profileImage = req.file.path;

  /*const itinerary = new Itinerary({
  profileImage: req.file.path,
  profileName: req.body.profileName,
  title: req.body.title,
  rating: req.body.rating,
  hours: req.body.hours,
  cost: req.body.cost,
  cityName: req.body.cityName,
  }
  */
  itineraryModel
    .create(req.body)
    .then(itinerary => res.send(itinerary))
    .catch(next);
});

router.put("/:id", (req, res, next) => {
  itineraryModel
    .findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function() {
      itineraryModel
        .findOne({ _id: req.params.id })
        .then(function(itinerary) {
          res.send(itinerary);
        })
        .catch(next);
    });
});

router.delete("/:id", (req, res, next) => {
  itineraryModel
    .findByIdAndRemove({ _id: req.params.id })
    .then(function(itinerary) {
      res.send(itinerary);
    })
    .catch(next);
});

module.exports = router;
