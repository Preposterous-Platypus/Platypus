var mongoose = require('mongoose');

var LikesSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  }

});

var Likes = mongoose.model('Likes', LikesSchema);

module.exports = Likes;