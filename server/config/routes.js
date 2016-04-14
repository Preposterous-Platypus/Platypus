var restaurantController = require('../restaurants/restaurantController.js');
var userController = require('../users/userController.js');
var passport = require('passport');

module.exports = function (app, express) {
  //API endpoints for signIn, signUp, and checkAuth
  app.post('/api/users/signin', userController.signin);
  app.get('/api/users/signedin', userController.checkAuth);
  app.get('/github/auth', passport.authenticate('github', { successRedirect: '/', failureRedirect: '/signin'}));
  app.get('/github/callback', passport.authenticate('github', { failureRedirect: '/signin'}),
  	function(req, res) {
  	  var tempPassportSession = req.session.passport;
  	  req.session.regenerate(function() {
  	  	req.session.passport = tempPassportSession;
  	  	res.redirect('/');
  	  });
  	});
};
