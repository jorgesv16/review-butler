const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    console.log('phrasesController - findAll');
    db.Phrase
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
        console.log('phrasesController - findById');

    db.Phrase
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
        console.log('phrasesController - create, req:', req.body);

    db.Phrase
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
        console.log('phrasesController - update');

    console.log("params, body:", req.params.id , req.body)

    db.Phrase
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
        console.log('phrasesController - remove');

    db.Phrase
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
