var mongoose = require("mongoose");
const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send("Server is working!")
});

app.listen(3000, () => {
    console.log("Listening on localhost:3000")
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

app.get("/weather", (req, res) => {
    console.log(testSchema);
})

var test = mongoose.model("test", testSchema);

var Atlanta = new test({ city: 'Atlanta', zip: '30009', weather: 'cloudy'});

Atlanta.speak();