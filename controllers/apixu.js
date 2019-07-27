let request = require('request');

let city = 'Atlanta';
let url = `http://api.apixu.com/v1/current.json?key=9a6d1cab9e4a4f8f8d4230629191807&q=${city}`;

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
    var weather = JSON.parse(body);
    console.log(weather);
    var temp = `It's ${weather.current.temp_f} degrees in
    ${weather.location.name}!`;
    console.log(temp);
  }
});
