var mongoose = require('mongoose');

var likedSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  }
});