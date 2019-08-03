const Mongoose = require("mongoose");
const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.forecast.find(req.query)
        .then(dbForecast => res.json(dbForecast))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.forecast.findById(req.params.id)
        .then(dbForecast => res.json(dbForecast))
        .catch(err => res.status(422).json(err));
    }
}