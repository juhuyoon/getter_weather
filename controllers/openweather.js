let request = require('request');

let apiKey = '0df9f64365060ae81c16eb4855a81df7';
let city = 'Atlanta';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, body) {
  if(err){
    console.log('error:', error);
  } else {
    var weather = JSON.parse(body.body);
    console.log(weather);

    var weatherObj = {
      city: weather.name,
      condition: "Rain",
      temp: weather.main.temp,
      humidity: weather.main.humidity
    };

    console.log(weatherObj);
    
  }
});
