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
  itineraryModel
    .find({ cityName: req.params.city })
    .then(itinerary => res.json(itinerary));
});

router.post("/", upload.single("profileImage"), (req, res, next) => {
  console.log(req.file);
  itineraryModel
    .create(req.body)
    .then(itinerary => res.send(itinerary))
    .catch(next);
});

module.exports = router;
