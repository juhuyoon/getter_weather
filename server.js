var mongoose = require("mongoose");
const express = require("express");
const axios = require('axios');
const app = express();

app.get("/", (req, res) => {
    res.send("Server is working!")
});

app.get('/apixu', function (req, res) {
    
    axios({
        method: 'get',
        url: 'http://api.apixu.com/v1/current.json?key=9a6d1cab9e4a4f8f8d4230629191807&q=Paris',
        })
        .then(function(response) {
            console.log(response);
        });
    res.send("APIXU is working");
  });

app.get('/openweather', function (req, res) {
    
    axios({
        method: 'get',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=0df9f64365060ae81c16eb4855a81df7',
        })
        .then(function(response) {
            console.log(response);
        });
    res.send("Openweather is working");
  });

  app.get('/accuweather', function (req, res) {
    
    axios({
        method: 'get',
        url: 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/348181?apikey=aIM0XKfnNBCyI8Ya7Q5Shb1RYTpCL3Od',
        })
        .then(function(response) {
            console.log(response);
        });
    res.send("Accuweather is working");
  });

  app.get('/darksky', function (req, res) {
    
    axios({
        method: 'get',
        url: 'https://api.darksky.net/forecast/112b5fa6d162582af407458fecc3d47d/37.8267,-122.4233',
        })
        .then(function(response) {
            console.log(response);
        });
    res.send("DarkSky is working");
  });


app.listen(3000, () => {
    console.log("Listening on localhost:3000")
});

mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("Connected!")
});

var testSchema = new mongoose.Schema({
    city: String,
    zip: String,
    weather: String
});

testSchema.methods.speak = function () {
    var dataSpew = (this.city, this.zip, this.weather);
    console.log(dataSpew);
};

app.get("/weather", (req, res) => {
    console.log(testSchema);
})

var test = mongoose.model("test", testSchema);

var Atlanta = new test({ city: 'Atlanta', zip: '30009', weather: 'cloudy'});

Atlanta.speak();