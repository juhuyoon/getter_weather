var mongoose = require("mongoose");
const express = require("express");
const axios = require('axios');
const app = express();
var routes = require('./controllers/weatherController');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log("Listening on localhost:3000")
});

app.get("/", (req, res) => {
    res.send("Server is working!")
});

   
mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("Connected!")
});

var testSchema = new mongoose.Schema({
    city: String,
    zip: String,
    weather: String
});

testSchema.methods.speak = function () {
    var dataSpew = (this.city, this.zip, this.weather);
    console.log(dataSpew);
};

var test = mongoose.model("test", testSchema);

var Atlanta = new test({ city: 'Atlanta', zip: '30009', weather: 'cloudy'});

Atlanta.speak();

app.post("/addname", (req, res) => {
    var myData = new test(req.body);
    console.log(myData);
    myData.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});