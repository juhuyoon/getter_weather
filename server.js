var mongoose = require("mongoose");
const express = require("express");
const PORT = 3000;
const app = express();
const router = require("./routes/index.js");

app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Server is working!");
});

app.use(router);

mongoose.connect("mongodb://localhost/weatherDB", { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected!");
});

//var dbInfo = mongoose.model("forecast", weatherSchema);

//console.log(dbInfo);


// app.get("/addname", (req, res) => {
//   var myData = Atlanta;
//   console.log(myData);
//   myData
//     .save()
//     .then(item => {
//       res.send("item saved to database");
//     })
//     .catch(err => {
//       res.status(400).send("unable to save to database");
//     });
// });
