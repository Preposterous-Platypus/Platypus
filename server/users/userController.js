var jwt = require('jwt-simple');
var passport = require('passport');
var User = require('./userModel.js');

module.exports = {
  //all methods - createOne, delete, removeOne, signIn, signUp, checkAuth
  createOne: function(req, res) {
    var newUser = req.body;
    User.create(newUser, function(err, data) {
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
  },

  signin: function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    var name = req.body.name;

    User.findOne({email: email}, function(err, user) {
      if (!user) {
        console.log('User does not exist ', err);
        var newUser = new User({
          email: email,
          name: name,
          password: password
        }).save();
        next(newUser);
      } else {
        next(user);
      }
    });
  },

  checkAuth: function (req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) {
      next(new Error('No token'));
    } else {
      var user = jwt.decode(token);
      User.findOne({email: email}, function(err, foundUser) {
        if (foundUser) {
          res.send(200);
        } else {
          res.send(401);
        }
      });
    }
  }
};
