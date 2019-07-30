const express = require('express')
var router = express.Router();
const axios = require('axios');


router.get('/apixu', function (req, res) {
    
    axios({
        method: 'get',
        url: 'http://api.apixu.com/v1/current.json?key=9a6d1cab9e4a4f8f8d4230629191807&q=Paris',
        })
        .then(function(response) {
            console.log(response.data.current);
        });
    res.send("APIXU is working");
  });

router.get('/openweather', function (req, res, err) {
    
    axios({
        method: 'get',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=atlanta&routerid=0df9f64365060ae81c16eb4855a81df7',
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(err);
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
    
    axios({
        method: 'get',
        url: 'https://api.darksky.net/forecast/112b5fa6d162582af407458fecc3d47d/37.8267,-122.4233',
        })
        .then(function(response) {
            console.log(response);
        });
    res.send("DarkSky is working");
  });

module.exports = router;