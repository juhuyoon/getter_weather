let request = require('request');

let lat = 33.7490;
let long = -84.3880;
let url = `https://api.darksky.net/forecast/112b5fa6d162582af407458fecc3d47d/${lat},${long}

`
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
    var weather = JSON.parse(body);
    console.log(weather);
    var temp = `It's ${weather.daily.summary}!`;
    console.log(temp);
  }
});