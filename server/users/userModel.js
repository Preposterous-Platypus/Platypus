var mongoose = require('mongoose');

// Flesh out our User schema and register the model with Mongoose

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  email: String,
  image: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;