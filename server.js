const mongoose = require("mongoose");
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'getterweather/build')));

app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'getterweather/build', 'index.html'));
});

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/test";

mongoose.connect(MONGODB_URI);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("Connected!")
});

// var testSchema = new mongoose.Schema({
//     city: String,
//     zip: String,
//     weather: String
// });

// testSchema.methods.speak = function () {
//     var dataSpew = (this.city, this.zip, this.weather);
//     console.log(dataSpew);
// };

// var test = mongoose.model("test", testSchema);

// var Atlanta = new test({ city: 'Atlanta', zip: '30009', weather: 'cloudy'});

// Atlanta.speak();

app.get("/addname", (req, res) => {
    var myData = Atlanta;
    console.log(myData);
    myData.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});
