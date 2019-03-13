const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: String,
  country: String
});

// City is our city model. City model will represent the city collection.
/*'city' will be the collection in the database. 
Mongoose will pluralize it and will create a collection of cities.*/
const City = mongoose.model("city", citySchema);
module.exports = City;

// another short way to do the above
// module.exports = mongoose.model("cities", citySchema);
