var mongoose = require("mongoose");
const express = require("express");
const app = express();
let request = require("request");

var userCity = "Atlanta";
let lat = 33.749;
let long = -84.388;
let url = `https://api.darksky.net/forecast/112b5fa6d162582af407458fecc3d47d/${lat},${long}`;

mongoose.connect("mongodb://localhost/weatherDB", {useNewUrlParser: true});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected!");
});

var weatherSchema = new mongoose.Schema({
  _id: Number,
  city: String,
  condition: String,
  temp: Number,
  humidity: Number
}, { collection: 'weather' });

var forecast = mongoose.model("weather", weatherSchema);

request(url, function(err, body) {
  if (err) {
    console.log("error:", error);
  } else {
    var weather = JSON.parse(body.body);
    console.log(weather);

    var today = weather.currently;

    var weatherObj = {
      city: userCity,
      condition: today.summary,
      temp: today.temperature,
      humidity: today.humidity
    };

  }
});
