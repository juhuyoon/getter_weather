function myFunction() {

   var request = require('request');
   // var input1 = document.getElementById('Atlanta');
   var input1 = 'Atlanta';
   var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
   var apikey = '&APPID=0df9f64365060ae81c16eb4855a81df7';
   var sum = api + input1.value + apikey;

   request = new XMLHttpRequest();

   request.open('GET', sum, true);
   request.onload = function () {

       var data = JSON.parse(this.response);
       if (request.status >= 200 && request.status < 400) {
           console.log(data);
       } else {
           console.log(input1.value);
       }
   }

   request.send();
}

myFunction()