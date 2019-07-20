var mongoose = require("mongoose");
const express = require("express");
const axios = require('axios');
const app = express();

app.get("/", (req, res) => {
    res.send("Server is working!")
});

app.get('/weather', function (req, res) {
    
    axios({
        method: 'get',
        url: 'http://api.apixu.com/v1/current.json?key=9a6d1cab9e4a4f8f8d4230629191807&q=Paris',
        })
        .then(function(response) {
            console.log(response);
        });
    res.send("weather is working");
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