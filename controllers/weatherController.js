var express = require('express')
var app = express()

app.get('/weather', function (req, res) {
  res.send("this is working")
  $.getJSON('http://api.apixu.com/v1/current.json?key=9a6d1cab9e4a4f8f8d4230629191807&q=Paris', function(result) {
      console.log(result)
  });
})