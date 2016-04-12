var express = require('express');
var mongoose = require('mongoose');

var app = express();

var port = process.env.PORT || 8000;
//connect to mongo database named "platypus"
mongoose.connect('mongodb://localhost/platypus');

//configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
// require('./config/routes.js')(app, express);


// app.use('/api/restaurants', restaurantRouter);
// app.use('/api/users', userRouter);
// app.use('/api/likes', likesRouter);

app.listen(port, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('Platypus is listening on ' + port);
});  

//export our app for testing and flexibility, required by index.js
module.exports = app;
