var restaurantController = require('../restaurants/restaurantController.js');
var userController = require('../users/userController.js');

module.exports = function (app, express) {
  //API endpoints for signIn, signUp, and checkAuth
  app.post('/api/users/signin', userController.signin);
  app.post('/api/users/signup', userController.signup);
  app.get('/api/users/signedin', userController.checkAuth);

  //Error handling below here
};