const Mongoose = require("mongoose");
const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.forecasts
      .find(req.query)
      .then(dbForecast => res.json(dbForecast))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.forecasts
      .findById(req.params.id)
      .then(dbForecast => res.json(dbForecast))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.forecasts
      .create(req.body)
      .then(dbForecast => res.json(dbForecast))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.forecasts
      .findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbForecast => res.json(dbForecast))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.forecasts
      .findById(req.params.id)
      .then(dbForecast => dbForecast.remove())
      .then(dbForecast => res.json(dbForecast))
      .catch(err => res.status(422).json(err));
  }
};
