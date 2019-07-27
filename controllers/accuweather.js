let request = require('request');

let city = '348181';
let url = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${city}?apikey=aIM0XKfnNBCyI8Ya7Q5Shb1RYTpCL3Od`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
    var weather = JSON.parse(body);
    console.log(weather);
    var temp = `${weather.DailyForecasts}`;
    console.log(temp);
    var temp2 = JSON.parse(temp);
    console.log(temp2);
  }
});

