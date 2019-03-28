const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  title: {
    type: String
  },
  name: {
    type: String
  },
  image: {
    type: String
  },
  cityName: {
    type: String
  },
  itinerary_id: {
    type: String
  }
});

const Activity = mongoose.model("activities", ActivitySchema);
module.exports = Activity;
