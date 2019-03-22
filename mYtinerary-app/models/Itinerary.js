const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItinerarySchema = new Schema({
  title: {
    type: String
  },
  profileImage: {
    type: String
  },
  profileName: {
    type: String
  },
  rating: {
    type: Number
  },
  hours: {
    type: Number
  },
  cost: {
    type: String
  },
  cityName: {
    type: String
  },
  hashtags: {
    type: Array
  }
});

const Itinerary = mongoose.model("itineraries", ItinerarySchema);
module.exports = Itinerary;
