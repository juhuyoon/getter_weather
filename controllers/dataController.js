const Mongoose = require("mongoose");
const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Weather
      .find(req.query)
      .then(dbForecast => res.json(dbForecast))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Weather
      .findById(req.params.id)
      .then(dbForecast => res.json(dbForecast))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Weather
      .create(req.body)
      .then(dbForecast => res.json(dbForecast))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Weather
      .findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbForecast => res.json(dbForecast))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Weather
      .findById(req.params.id)
      .then(dbForecast => dbForecast.remove())
      .then(dbForecast => res.json(dbForecast))
      .catch(err => res.status(422).json(err));
  }
};