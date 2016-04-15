var express = require('express');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var User = require('./users/userModel.js');

var app = express();

var port = process.env.PORT || 8000;
//connect to mongo database named "platypus"
mongoose.connect('mongodb://localhost/platypus');

//configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);



// app.use('/api/restaurants', restaurantRouter);
// app.use('/api/users', userRouter);
// app.use('/api/likes', likesRouter);

app.listen(port, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('Platypus is listening on ' + port);
});  

app.use(session({secret: 'asdf'}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GitHubStrategy({
  clientID: '4cc724b73df7e764536f',
  clientSecret: 'dad7b3b87f7478e53ed79186e41ef7aea161ba15',
  callbackURL: 'http://127.0.0.1:8000/github/callback'
}, function(accessToken, refreshToken, profile, callback) {
  console.log(accessToken, refreshToken);
  // console.log('PROFILE >>>>>> ', profile);
  User
    .findOne({'gitHubHandle': profile.username}, function(err, found) {
      console.log('FindOne Executed: ', found);
      if (found) {
        console.log('user found ', found);
      	callback(null, found);
      } else {
        User.create({ 
          name: profile.displayName,
          gitHubHandle: profile.username,
          email: profile._json.email,
          iamge: profile.photos[0].value
        }, function(newUser) {
          console.log('user created ', newUser);
      	  callback(null, newUser);
      	});
      }
    })
}));

passport.serializeUser(function(user, done) {
  done(null, user.get('id'));
});

passport.deserializeUser(function(id, done) {
  done(null, id);
});

require('./config/routes.js')(app, express, passport);
