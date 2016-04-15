var Restaurant = require('./RestaurantModel.js');
var Likes = require('../Likes/LikesModel.js');
var User = require('../users/userModel.js');
module.exports = {
  //all methods - find, findOne, addOne, delete, deleteOne
  addOne: function(req, res) {
    console.log("adding one");
    var newRestaurant = req.body;
    Restaurant.insert(newRestaurant, function(err, data) {
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
    Restaurant.findOneAndRemove(query, function(err, data) {
      if (err) {
        return res.json(err);
      }
      res.json(data);
    });
  },

  retrieveOne: function(req, res) {
    var query = { _id: req.params.id };
    Restaurant.findOne(query, function(err, data) {
      if (err) {
        return res.json(err);
      }
      res.json(data);
    });
  },

  retrieveAll: function(req, res) {
    var query = req.query;
    console.log("retrievingAll: backend controller");
    Restaurant.find({}, function(err, data) {
      if (err) {
        return res.json(err);
      }
      res.json(data);
    });
  }
};