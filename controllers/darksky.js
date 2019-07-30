var mongoose = require("mongoose");
const express = require("express");
const app = express();
let request = require('request');

let lat = 33.7490;
let long = -84.3880;
let url = `https://api.darksky.net/forecast/112b5fa6d162582af407458fecc3d47d/${lat},${long}`

mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("Connected!")
});

var testSchema = new mongoose.Schema({
  condition: String,
  temp: String,
  humidity: String
});

var test = mongoose.model("test", testSchema);

request(url, function (err, body) {
  if(err){
    console.log('error:', error);
  } else {
    var weather = JSON.parse(body);
    console.log( weather );

    var today = weather.currently;

    var weatherObj = {
      condition: today.summary,
      temp: today.temperature,
      humidity: today.humidity
    };

    var document = new test(weatherObj);
    document.save();

    console.log(weatherObj);
  }
});