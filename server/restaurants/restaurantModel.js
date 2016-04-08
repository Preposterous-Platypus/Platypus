var mongoose = require('mongoose');

// Flesh out our User schema and register the model with Mongoose

var RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  yelpID: String,
  distance: String,
  image_url: String,
  likes: Number
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;