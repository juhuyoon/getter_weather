let request = require('request');

let apiKey = '0df9f64365060ae81c16eb4855a81df7';
let city = 'Atlanta';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
    var weather = JSON.parse(body);
    console.log(weather);
    var temp = `It's ${weather.main.temp} degrees in
    ${weather.name}!`;
    console.log(temp);
  }
});
