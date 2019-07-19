// referencing all packages
var mongoose = require("mongoose");
const express = require("express")
const app = express();

//request server start
app.get("/", (req, res) => {
    res.send("Server is working!")
});

// confirm that the server has started
app.listen(3000, () => {
    console.log("Listening on localhost:3000")
});

// connect mongoose schema to the correct database
mongoose.connect("mongodb://localhost/weatherdata", {useNewUrlParser: true});

// verify that mongoose is connected
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("Connected!")
});

// schema for adding new collections
var testSchema = new mongoose.Schema({
    city: String,
    zip: Number,
    temp: {minTemp: Number, maxTemp: Number},
    condition: String
});