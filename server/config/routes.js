var restaurantController = require('../restaurants/restaurantController.js');
var userController = require('../users/userController.js');

module.exports = function (app, express, passport) {
  //API endpoints for signIn, signUp, and checkAuth
  app.post('/api/users/signin', userController.signin);
  app.get('/api/users/signedin', function(req, res) {
    res.send(req.isAuthenticated() ? req.user : false);
  });

  app.get('/github/auth', passport.authenticate('github', { successRedirect: '/#/user/dashboard', failureRedirect: '/'}));
  app.get('/github/callback', passport.authenticate('github', { failureRedirect: '/'}),
  	function(req, res) {
  	  var tempPassportSession = req.session.passport;
  	  req.session.regenerate(function() {
  	  	req.session.passport = tempPassportSession;
  	  	res.redirect('/#/user/dashboard');
  	  });
  	});
  app.post('/api/restaurants', restaurantController.addOne);
  app.get('/api/restaurants', restaurantController.retrieveAll);
};
