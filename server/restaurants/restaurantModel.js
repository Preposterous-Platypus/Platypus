var mongoose = require('mongoose');

// Flesh out our User schema and register the model with Mongoose

var restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  yelpID: String,
  url: {
    type: String,
    unique: true,
    required: true
  },
  eat24_url: {
    type: String,
    unique: true,
    required: false
  },
  image_url: String,
  likes: Number,
  categories: [{type: String}]
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;