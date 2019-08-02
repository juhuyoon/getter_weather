let request = require('request');
var mongoose = require("mongoose");

let city = '348181';
let url = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${city}?apikey=aIM0XKfnNBCyI8Ya7Q5Shb1RYTpCL3Od`

  if(err){
    console.log('error:', error);
  } else {
    var bodyParse = JSON.parse(body.body);
    console.log(bodyParse);

    var weather = bodyParse.DailyForecasts[0]

    console.log()

    var weatherObj = {
      city: userCity,
      condition: weather.Day.IconPhrase,
      temp: "",
      humidity: ""
    };

}

