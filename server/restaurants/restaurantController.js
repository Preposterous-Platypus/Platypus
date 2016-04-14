var Restaurant = require('./RestaurantModel.js');
var Likes = require('../Likes/LikesModel.js');

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
    Restaurant.findOneAndUpdate(query, updatedProps, options, function(err, data) {
      if (err) {
        return res.json(err);
      }
      res.json(data);
    });
  },

  updateLikes: function(req, res) {
    var query = { _id: req.params.id };
    //reference for count http://mongoosejs.com/docs/api.html
    Likes.query.count({restaurant: req.params.id}, function(err, data){
      if(err){
        return res.json(err);
      }
      var updatedProps = {likes: data};
      var options = {
        new: true,
        upsert: true
      };
      Restaurant.findOneAndUpdate(query, updatedProps, options, function(err, data) {
        if (err) {
          return res.json(err);
        }
        res.json(data);
      });    
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