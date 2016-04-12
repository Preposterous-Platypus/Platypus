var Likes = require('../likesModel.js');

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

retrieve: function(req, res) {
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

delete: function(req, res) {
  var query = req.query;
  Likes.find(query, function(err, response) {
    if (err) {
      return res.json(err);
    }
    Likes.remove(query, function(err) {
      if (err) {
        return res.json(err);
      }
      res.json(response);
    });
  });
},

deleteOne: function(req, res) {
  var query = {_id: req.params.id};
  Likes.findOneAndRemove(query, function(err, response) {
    if (err) {
      return res.json(err);
    }
    res.json(response);
  });
  }

};