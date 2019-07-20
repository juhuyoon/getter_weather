// referencing all packages
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
const express = require("express");
const app = express();

//request server start

// confirm that the server has started
app.listen(3000, () => {
  console.log("Listening on localhost:3000");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// connect mongoose schema to the correct database
mongoose.Promise =
global.Promise;
mongoose.connect("mongodb://localhost:27017/weatherdata", {
  useNewUrlParser: true
});

// verify that mongoose is connected
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected!");
});

// schema for adding new collections
var weatherSchema = new mongoose.Schema({
  city: String,
  zip: Number,
  temp: { minTemp: Number, maxTemp: Number },
  condition: String
});

app.post("/submit", function(req, res) {
  var city = new weatherSchema(req.body);
  city
    .save()
    .then(item => {
      res.send("Document Saved!");
    })
    .catch(err => {
      res.status(400).send("Save Unsuccessful");
    });
});
