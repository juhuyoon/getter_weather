const express = require('express');
const router = express.Router();
const request = require('request');
const axios = require('axios');
var mongoose = require("mongoose");


router.get('/apixu', function (req, res) {

    let city = 'Atlanta';
    let apixuURL = `http://api.apixu.com/v1/current.json?key=9a6d1cab9e4a4f8f8d4230629191807&q=${city}`

    // mongoose.connect("mongodb://localhost/weatherDB", {useNewUrlParser: true});

    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function() {
        console.log("Connected!")
    });

    var weatherSchema = new mongoose.Schema({
    condition: String,
    temp: String,
    humidity: String
    });

    var forecast = mongoose.model("forecast", weatherSchema);
        
    axios({
        method: 'get',
        url: apixuURL,
        })
        .then(function(response) {
            var weather = JSON.parse(response);

            var weatherObj = {
                city: weather.location.name,
                condition: weather.current.condition.text,
                temp: weather.current.temp_f,
                humidity: weather.current.humidity
              };

            var document = new forecast(weatherObj);
            document.save();

            console.log(weatherObj);
        });
    res.send("APIXU is working");
  });

router.get('/openweather', function (req, res, err) {

    let apiKey = '0df9f64365060ae81c16eb4855a81df7';
    let city = 'Atlanta';
    let base = 'http://api.openweathermap.org/data/2.5/weather?q=';
    let bit = '&units=imperial&appid=';
    let openURL = base + city + bit + apiKey;

    axios({
        method: 'get',
        url: openURL,
        })
        .then(function(response) {
            console.log(response);
        }).catch(err => {
            console.log(err);
        });
    res.send("Openweather is working");
  });

  router.get('/accuweather', function (req, res) {
    
    axios({
        method: 'get',
        url: 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/348181?apikey=aIM0XKfnNBCyI8Ya7Q5Shb1RYTpCL3Od',
        })
        .then(function(response) {
            console.log(response);
        });
    res.send("Accuweather is working");
  });

  router.get('/darksky', function (req, res, err) {

    let userCity = "Atlanta";
    let lat = 33.749;
    let long = -84.388;
    let darkURL = `https://api.darksky.net/forecast/112b5fa6d162582af407458fecc3d47d/${lat},${long}`;
    
    axios({
        method: 'get',
        url: darkURL,
        })
        .then(function(response) {
            console.log(response);
        });
    res.send("DarkSky is working");
  });

module.exports = router;