var Likes = require('./likesModel.js');

module.exports = {
  addOne: function(req, res) {
    var newLikes = req.body;
    Likes.create(newLikes, function(err, response) {
      if (err) {
        return res.json(err);
      }
      res.json(response);
    });
  },

  retrieveAll: function(req, res) {
    var query = req.query;
    Likes.find(query, function(err, response) {
      if (err) {
        return res.json(err);
      }
      res.json(response);
    });
  },

  retrieveOne: function(req, res) {
    var query = {_id: req.params.id};
    Likes.findOne(query, function(err, response) {
      if (err) {
        return res.json(err);
      }
      res.json(response);
    });
  },

  removeOne: function(req, res) {
    var query = {_id: req.params.id};
    Likes.findOneAndRemove(query, function(err, response) {
      if (err) {
        return res.json(err);
      }
      res.json(response);
    });
  }
};