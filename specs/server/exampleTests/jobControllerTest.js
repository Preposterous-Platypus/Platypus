var expect = require('chai').expect;
var mongoose = require('mongoose');
var Job = require('../models/Job');
var jobController = require('./jobController');

var dbURI = 'mongodb://localhost/jobquery';

// The `clearDB` helper function, when invoked, will clear the database
var clearDB = function (done) {
  mongoose.connection.collections['jobs'].remove(done);
};

describe('Job Controller', function () {

  // Connect to database before any tests
  before(function (done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  beforeEach(function (done) {
    clearDB(function () {
      var jobs = [
        {
          company: 'Geico',
          title: 'Lead Gecko Maintenance',
          description: 'Ensure Top of the Line Gecko Services are Maintained',
          postedDate: new Date(),
          salary: 67000
        },
        {
          company: 'Apple',
          title: 'Chief Shine Engineer',
          description: 'Ensure All Products Are at Max Shiny Efficiency',
          postedDate: new Date(),
          salary: 121000
        },
        {
          company: 'Walmart: San Jose Store 21755',
          title: 'Chief Sidewalk Maintenance Engineer',
          description: 'Clean Sidewalks',
          postedDate: new Date(),
          salary: 33000
        },
        {
          company: 'City of San Francisco',
          title: 'Mime Relations Officer',
          description: 'Do Routine Mime Check-Ins',
          postedDate: new Date(),
          salary: 43000
        },
      ];
      Job.create(jobs, done);
    });
  });

  it('Create jobs for hardworking Americans', function (done) {
    var newJob = {
      company: 'TSA',
      title: 'Senior Complaints Officer',
      description: 'Throw Complaints Into Incinerator',
      postedDate: new Date(),
      salary: 49000
    };

    jobController.createJob(newJob, function() {
      Job.findOne({company: 'TSA'}, function(err, result) {
        result = {
          company: result.company,
          title: result.title
        };

        var test = {
          company: newJob.company,
          title: newJob.title
        };
        expect(result).to.eql(test);
        done();
      });
    });
  });

  it('should have a method that returns high-paying jobs for Americans', function (done) {
    jobController.getHighPayingJobs(function(jobs) {
      expect(jobs.length).to.equal(2);
      done();
    });
  });

});
