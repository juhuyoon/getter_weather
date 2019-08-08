let request = require('request');
var mongoose = require("mongoose");

let city = 'Atlanta';
let url = `http://api.apixu.com/v1/current.json?key=9a6d1cab9e4a4f8f8d4230629191807&q=${city}`

mongoose.connect("mongodb://localhost/weatherDB", {useNewUrlParser: true});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("Connected!")
});

var weatherSchema = new mongoose.Schema({
  _id: Number,
  city: String,
  condition: String,
  temp: Number,
  humidity: Number
}, { collection: 'weather' });

var forecast = mongoose.model("weather", weatherSchema);

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    var weather = JSON.parse(body);
    console.log(weather);

    var weatherObj = {
      city: weather.location.name,
      condition: weather.current.condition.text,
      temp: weather.current.temp_f,
      humidity: weather.current.humidity,
      f: weather.current.feelslike_f
    };

    var document = new forecast(weatherObj);
    document.save();

    console.log(weatherObj);

  }
});
