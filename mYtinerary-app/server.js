let express = require("express");
let mongoose = require("mongoose");
const cityRoute = require("./routes/api/cityRoute");
const itineraryRoute = require("./routes/api/itineraryRoute");
const bodyParser = require("body-parser");

var app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Connect with mongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connection Done!"))
  .catch(err => console.log("Error", err));

// mongoose
//   .connect(
//     "mongodb+srv://elviramern:qJ2SLhpLNtbfo7H3@mytinerary-lr4ho.mongodb.net/CRUD?retryWrites=true",
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("Connection Done!"))
//   .catch(err => console.log("Error", err));

app.use(bodyParser.json());
// Middleware which initialize the routes
app.use("/cities", cityRoute);
app.use("/itineraries", itineraryRoute);
// error handling middleware.
app.use("/Cities/uploads", express.static("uploads"));
app.use(function(err, req, res, next) {
  res.status(422).send({ error: err.message });
});
// app.get("/", (req, res) => res.send());
// app.get("/test", (req, res) => res.send("Test works"));

/*app.get("/", function(req, res) { 
  res.send("HELLO WORLD");
});*/

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
