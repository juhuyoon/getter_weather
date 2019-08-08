let request = require('request');
var mongoose = require("mongoose");

let city = '348181';
let url = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${city}?apikey=aIM0XKfnNBCyI8Ya7Q5Shb1RYTpCL3Od`
request(url, function(err, body) {
  if(err){
    console.log('error:');
  } else {
    var bodyParse = JSON.parse(body.body);

    var weather = bodyParse.DailyForecasts[0].Temperature.Minimum.Value
    console.log(weather)

  };
})
