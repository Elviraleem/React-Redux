let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let citySchema = new Schema({
  name: String,
  country: String
});

module.exports = mongoose.model("cities", citySchema);
