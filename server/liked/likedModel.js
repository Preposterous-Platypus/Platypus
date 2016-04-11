var mongoose = require('mongoose');

 module.exports = {
  restaurant: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  }

}