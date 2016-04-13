var expect = require('chai').expect;
var mongoose = require('mongoose');
var User = require('../../users/userModel.js');
var userController = require('../../users/userController.js');

var dbURI = 'mongodb://localhost/users';

var clearDB = function(done) {
  mongoose.connection.collections['users'].remove(done);
};

//Tests for User Controller
describe('User Controller', function() {
  //connect to database
  before(function(done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  //clear database before each test
  beforeEach(function(done) {
    clearDB(function() {
      var users = [
        {
          name: 'Magee',
          gitHubHandle: 'magee',
          email: 'magee@magee.com',
          image: ''
        },
        {
          name: 'Dan',
          gitHubHandle: 'dan',
          email: 'dan@dan.com',
          image: ''
        },
        {
          name: 'Beth',
          gitHubHandle: 'beth',
          email: 'beth@beth.com',
          image: ''
        },
        {
          name: 'Sunny',
          gitHubHandle: 'sunny',
          email: 'sunny@sunny.com',
          image: ''
        },
        {
          name: 'Zach',
          gitHubHandle: 'zach',
          email: 'zach@zach.com',
          image: ''
        }
      ];

      // See http://mongoosejs.com/docs/models.html for details on the `create` method
      User.create(users, done);
    });
  });

  //createOne
  it('should add a user to the database given the details', function(done) {
    var exampleUser = {
      name: 'Bubba',
      gitHubHandle: 'bubba',
      email: 'bubba@bubba.com',
      image: ''
    };

    //set length
    var oldDB = users.length;

    userController.createOne(exampleUser, function(result) {
      result = {
        name: result.name,
        gitHubHandle: result.gitHubHandle,
        email: result.email,
        image: result.image
      };

      expect(result).to.eql(exampleUser);
      expect(users.length).to.eql(oldDB + 1);
      done();
    });
  });

  //updateOne
  it('should update the user\'s info with what\'s given', function(done) {
    var newEmail = 'newMagee@magee.com';

    var result = userController.updateOne('_id', newEmail, function() {
      userController.retrieveOne('_id', function(result) {
        result = result.email;

        expect(result).to.equal(newEmail);
        done();
      });
    });
  });

  //removeOne
  it('should remove a user from the database', function(done) {

    //set length
    var oldDB = users.length;
    
    userController.removeOne('_id');
    expect(users.length).to.eql(oldDB - 1);
    done();
    });

  //retrieveOne
  it('should return the specific user that was asked for', function(done) {
    userController.retrieveOne('_id', function(result) {
      //need to complete
      expect(result).to.eql();
      done();
    });
  });

  //retrieveAll
  it('should return all users in the database', function(done) {
    
  });
});