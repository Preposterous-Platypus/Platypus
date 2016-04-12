var Likes = require('../likesModel.js');

module.exports = {
  addOne: function(req, res) {
  var newLikes = req.body;
  Likes.create(newLikes, function(err, data) {
    if (err) {
      return res.json(err);
    }
    res.json(data);
  });
},

retrieveAll: function(req, res) {
  var query = req.query;
  Likes.find(query, function(err, data) {
    if (err) {
      return res.json(err);
    }
    res.json(data);
  });
},

retrieveOne: function(req, res) {
  var query = {_id: req.params.id};
  Likes.findOne(query, function(err, data) {
    if (err) {
      return res.json(err);
    }
    res.json(data);
  });
},

deleteAll: function(req, res) {
  var query = req.query;
  Likes.find(query, function(err, data) {
    if (err) {
      return res.json(err);
    }
    Likes.remove(query, function(err, data) {
      if (err) {
        return res.json(err);
      }
      res.json(data);
    });
  });
},

deleteOne: function(req, res) {
  var query = {_id: req.params.id};
  Likes.findOneAndRemove(query, function(err, data) {
    if (err) {
      return res.json(err);
    }
    res.json(data);
  });
  }

};