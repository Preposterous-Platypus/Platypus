var restaurantController = require('../restaurants/restaurantController.js');
var userController = require('../users/userController.js');

module.exports = function (app, express) {
  //API endpoints for signIn, signUp, and checkAuth
  app.post('/api/users/signin', passport.authenticate('github'), userController.signin);
  app.get('/api/users/signedin', passport.authenticate('github'), userController.checkAuth);
  //app.get('/auth/github', passport.authenticate('github', { successRedirect: '/', failureRedirect: '/signin'}));

  //middleware to verify token still present

  //Error handling below here
};
