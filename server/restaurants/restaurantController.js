var Restaurant = require('./RestaurantModel.js');

module.exports = {
  //all methods - find, findOne, addOne, delete, deleteOne
  addOne: function(req, res) {
    var newRestaurant = req.body;
    Restaurant.create(newRestaurant, function(err, data) {
      if (err) {
        return res.json(err);
      }
      res.json(data);
    });
  },

  updateOne: function(req, res) {
    var query = { _id: req.params.id };
    var updatedProps = req.body;
    var options = {
      new: true,
      upsert: true
    };
    User.findOneAndUpdate(query, updatedProps, options, function(err, data) {
      if (err) {
        return res.json(err);
      }
      res.json(data);
    });
  },

  removeOne: function(req, res) {
    var query = { _id: req.params.id };
    User.findOneAndRemove(query, function(err, data) {
      if (err) {
        return res.json(err);
      }
      res.json(data);
    });
  },

  retrieveOne: function(req, res) {
    var query = { _id: req.params.id };
    User.findOne(query, function(err, data) {
      if (err) {
        return res.json(err);
      }
      res.json(data);
    });
  },

  retrieveAll: function(req, res) {
    var query = req.query;
    User.find(query, function(err, data) {
      if (err) {
        return res.json(err);
      }
      res.json(data);
    });
  }
};