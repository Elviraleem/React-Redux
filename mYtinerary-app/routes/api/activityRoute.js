const express = require("express");
const router = express.Router();
const activityModel = require("../../models/Activity");
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
router.get("/:id", (req, res) => {
  console.log("1", req.params.id);
  console.log("2", req.params.itinerary_id);
  activityModel
    .find({ itinerary_id: req.params.id })
    .then(activity => res.json(activity));
});

// add a new itinerary to the database
router.post("/", upload.single("image"), (req, res, next) => {
  console.log(req.file);
  req.body.image = req.file.path;

  /*const activity = new Activity({
  image: req.file.path,
  name: req.body.name,
  title: req.body.title,
  cityName: req.body.cityName,
  itinerary_id: req.body.itinerary_id
  }
  */
  activityModel
    .create(req.body)
    .then(activity => res.send(activity))
    .catch(next);
});

router.put("/:id", upload.single("image"), (req, res, next) => {
  activityModel
    .findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function() {
      activityModel
        .findOne({ _id: req.params.id })
        .then(function(activity) {
          res.send(activity);
        })
        .catch(next);
    });
});

router.delete("/:id", (req, res, next) => {
  activityModel
    .findByIdAndRemove({ _id: req.params.id })
    .then(function(activity) {
      res.send(activity);
    })
    .catch(next);
});

module.exports = router;
