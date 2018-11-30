'use strict';

var _chai = require('chai');

// Test the Testrunner
describe('Testrunner', function () {
	it('should return pass on 1 + 1 equals 2', function (done) {
		(0, _chai.expect)(1 + 1).to.equal(2);
		done();
	});
});

// Suites
/**
 * Runs all test-suites.
 */

// Variables
var gameEngineTests = require('./game-engine-test-suite');
var playerTests = require('./player-test-suite');
var appTests = require('./app-test-suite');
var viewEngineTests = require('./view-engine-test-suite');
var databaseManagerTests = require('./database-manager-test-suite');
var databaseModelTests = require('./database-model-test-suite');

// Runs
/*
databaseModelTests.run();
databaseManagerTests.run();
viewEngineTests.run();
*/
gameEngineTests.run();
/*
playerTests.run();
appTests.run();
*/