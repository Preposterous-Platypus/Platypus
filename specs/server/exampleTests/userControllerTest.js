var expect = require('chai').expect;
var mongoose = require('mongoose');
var User = require('../models/User');
var userController = require('./userController');


var dbURI = 'mongodb://localhost/jobquery';

// The `clearDB` helper function, when invoked, will clear the database
var clearDB = function (done) {
  mongoose.connection.collections['users'].remove(done);
};

describe('User Controller', function () {

  // Connect to database before any tests
  before(function (done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  // Clear database before each test and then seed it with example `users` so that you can run tests
  beforeEach(function (done) {
    clearDB(function () {
      var users = [
        {
          name: 'Magee',
          email: 'magee@magee.com'
        },
        {
          name: 'Dan',
          email: 'dan@dan.com'
        },
        {
          name: 'Beth',
          email: 'beth@beth.com'
        },
        {
          name: 'Sunny',
          email: 'sunny@sunny.com'
        },
        {
          name: 'Zach',
          email: 'zach@zach.com'
        }
      ];

      // See http://mongoosejs.com/docs/models.html for details on the `create` method
      User.create(users, done);
    });
  });

  it('should have a method that given the name of a user, retrieves their record from the database', function (done) {
    var example = {
      name: 'Magee',
      email: 'magee@magee.com'
    };

    userController.getUserByName('Magee', function(result) {
      result = {
        name: result.name,
        email: result.email
      };

      expect(result).to.eql(example);
      done();
    });

  });

  it('should have a method that given the name of a user, updates their `email` property', function (done) {
    var newEmail = 'newMagee@magee.com';

    var result = userController.updateEmailByName('Magee', newEmail, function() {
      userController.getUserByName('Magee', function(result) {
        result = result.email;

        expect(result).to.equal(newEmail);
        done();
      });
    });
  });

  it('should have a method that reads all users from the database at once', function (done) {
    // Sanitation is done on this end to ensure that actual user receives
    // the models with their methods intact.
    var users = [
      {
        name: 'Magee',
        email: 'magee@magee.com'
      },
      {
        name: 'Dan',
        email: 'dan@dan.com'
      },
      {
        name: 'Beth',
        email: 'beth@beth.com'
      },
      {
        name: 'Sunny',
        email: 'sunny@sunny.com'
      },
      {
        name: 'Zach',
        email: 'zach@zach.com'
      }
    ];

    userController.readAllUsers(function(results) {
      var sanitizedResults = [];

      results.forEach(function(result) {
        sanitizedResults.push({
          name: result.name,
          email: result.email
        });
      });

      expect(sanitizedResults).to.eql(users);
      done();
    });
  });

});
