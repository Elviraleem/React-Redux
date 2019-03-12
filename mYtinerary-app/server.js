const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
var ObjectID = require("mongodb").ObjectID; // we will use this later
let dbase;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.send("Yep it's working");
});

app.get("/love", (req, res) => {
  res.send("Hi Love");
});

MongoClient.connect(
  "mongodb+srv://elviramern:qJ2SLhpLNtbfo7H3@mytinerary-lr4ho.mongodb.net/test?retryWrites=true",
  { useNewUrlParser: true },
  (err, db) => {
    dbase = db.db("test");
    if (err) return console.log(err);
    app.listen(5000, () => {
      console.log("app working on 5000");
    });
  }
);

app.post("/name/add", (req, res, next) => {
  var name = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };

  dbase.collection("name").save(name, (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send("name added succesfully");
  });
});

app.get("/name", (req, res) => {
  dbase
    .collection("name")
    .find()
    .toArray((err, results) => {
      res.send(results);
    });
});

app.get("/name/:id", (req, res, next) => {
  if (err) {
    throw err;
  }

  let id = ObjectID(req.params.id);
  dbase
    .collection("name")
    .find(id)
    .toArray((err, result) => {
      if (err) {
        throw err;
      }

      res.send(result);
    });
});

app.put("/name/update/:id", (req, res, next) => {
  let id = {
    _id: ObjectID(req.params.id)
  };

  dbase.collection("name").updateOne(
    { _id: ObjectID(req.params.id) },
    {
      $set: { first_name: req.body.first_name, last_name: req.body.last_name }
    },
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    }
  );
});

app.delete("/name/delete/:id", (req, res, next) => {
  let id = ObjectID(req.params.id);

  dbase
    .collection("name")
    .deleteOne({ _id: ObjectID(req.params.id) }, (err, result) => {
      if (err) {
        throw err;
      }

      res.send("user deleted");
    });
});
