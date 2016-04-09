var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

var app = express();

var port = process.env.PORT || 8000;
//connect to mongo database named "platypus"
mongoose.connect('mongodb://localhost/platypus');

//configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.listen(port, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('Platypus is listening on ' + port);
});  

passport.use(new GitHubStrategy({
  clientID: '',
  clientSecret: '',
  callbackURL: ''
}, function(accessToken, refreshToken, profile, callback) {
  var newUser = new User({'github': profile.username});
  newUser
    .fetch()
    .then(function(found) {
      if (found) {
      	callback(null, found);
      } else {
      	newUser.set('avatar', profile.photos[0].value);
      	newUser.save()
      	.then(function() {
      	  callback(null, newUser);
      	});
      }
    })
}));

passport.serializeUser(function(user, done) {
  done(null, user.get('id'));
});

passport.deserializeUser(function(id, done) {
  new User({'id': id})
    .fetch()
    .then(function(found) {
      if(!found) {
      	done(null, 'User Not Found');
      } else {
      	done(null, found);
      }
    });
});

app.use(passport.initialize());




