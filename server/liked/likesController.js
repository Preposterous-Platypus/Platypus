var Liked = require('../likedModel.js');

module.exports = {
  createOne: function(req, res) {
  var newLiked = req.body;
  Liked.create(newLiked, function(err, response) {
    if (err) {
      return res.json(err);
    }
    res.json(response);
  });
},

retrieve: function(req, res) {
  var query = req.query;
  Liked.find(query, function(err, response) {
    if (err) {
      return res.json(err);
    }
    res.json(response);
  });
},

retrieveOne: function(req, res) {
  var query = {_id: req.params.id};
  Liked.findOne(query, function(err, response) {
    if (err) {
      return res.json(err);
    }
    res.json(response);
  });
},

delete: function(req, res) {
  var query = req.query;
  Liked.find(query, function(err, response) {
    if (err) {
      return res.json(err);
    }
    Liked.remove(query, function(err) {
      if (err) {
        return res.json(err);
      }
      res.json(response);
    });
  });
},

deleteOne: function(req, res) {
  var query = {_id: req.params.id};
  Liked.findOneAndRemove(query, function(err, response) {
    if (err) {
      return res.json(err);
    }
    res.json(response);
  });
  }

};