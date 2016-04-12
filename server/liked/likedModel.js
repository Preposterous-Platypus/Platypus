var mongoose = require('mongoose');

var likesSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  }
});

module.exports = likesSchema;