let request = require('request');
var mongoose = require("mongoose");

let apiKey = '0df9f64365060ae81c16eb4855a81df7';
let city = 'Atlanta';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

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

request(url, function (err, body) {
  if(err){
    console.log('error:', error);
  } else {
    var weather = JSON.parse(body.body);
    console.log(weather);

    var weatherObj = {
      city: weather.name,
      condition: weather.weather[0].main,
      temp: weather.main.temp,
      humidity: weather.main.humidity,
      max: weather.main.temp_max
    };

    var document = new forecast(weatherObj);
    document.save();
    
    console.log(weatherObj);
    
  }
});
