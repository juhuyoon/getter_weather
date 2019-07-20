let request = require('request');

let city = 'Atlanta';
let url = `https://api.darksky.net/forecast/112b5fa6d162582af407458fecc3d47d/37.8267,-122.4233

`
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});