const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  zipcode: { type: String, required: true },
  weather: { type: Number, required: true }
});

const weather = mongoose.model("weather", weatherSchema);

module.exports = weather;
