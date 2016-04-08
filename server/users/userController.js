var User = require('./userModel.js');

module.exports = {
  //all methods - createOne, delete, removeOne
  createOne: function(req, res) {
    var newUser = req.body;
    User.create(newUser, function(err, data) {
      if (err) {
        return res.json(err);
      }
      res.json(data);
    });
  },
};