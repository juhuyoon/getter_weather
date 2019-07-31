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