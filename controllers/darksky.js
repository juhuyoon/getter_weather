var mongoose = require("mongoose");
const express = require("express");
const app = express();
let request = require("request");

var userCity = "Atlanta";
let lat = 33.749;
let long = -84.388;
let url = `https://api.darksky.net/forecast/112b5fa6d162582af407458fecc3d47d/${lat},${long}`;

request(url, function(err, body) {
  if (err) {
    console.log("error:", error);
  } else {
    var weather = JSON.parse(body.body);
    console.log(weather.currently);

  }
});
