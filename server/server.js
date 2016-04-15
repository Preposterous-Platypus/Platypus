var express = require('express');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;


var app = express();

var port = process.env.PORT || 8000;
//connect to mongo database named "platypus"
mongoose.connect('mongodb://localhost/platypus');

//configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);


// app.use('/api/restaurants', restaurantRouter);
// app.use('/api/users', userRouter);
// app.use('/api/likes', likesRouter);

app.listen(port, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('Platypus is listening on ' + port);
});  

app.use(passport.initialize());
app.use(passport.session());

app.use(session({secret: 'asdf'}));

passport.use(new GitHubStrategy({
  clientID: '4cc724b73df7e764536f',
  clientSecret: 'dad7b3b87f7478e53ed79186e41ef7aea161ba15',
  callbackURL: 'http://localhost:8000/auth/github/callback'
}, function(accessToken, refreshToken, profile, callback) {
  console.log(accessToken, refreshToken);
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
  done(null, id);
});
