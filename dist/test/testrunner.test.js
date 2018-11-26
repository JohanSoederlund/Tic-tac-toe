'use strict';

var _chai = require('chai');

// Test the Testrunner
/*
describe('Testrunner', () => {
	it('should return pass on 1 + 1 equals 2', (done) => {
		expect(1 + 1).to.equal(2);
		done();
	});
});
*/

// Suites
var gameEngineTests = require('./game-engine-test-suite'); /**
                                                            * Runs all test-suites.
                                                            */

// Variables

var playerTests = require('./player-test-suite');
var appTests = require('./app-test-suite');
var viewEngineTests = require('./view-engine-test-suite');
var databaseManagerTests = require('./database-manager-test-suite');
var databaseModelTests = require('./database-model-test-suite');

// Runs
//databaseModelTests.run();
//databaseManagerTests.run();
//viewEngineTests.run();
//gameEngineTests.run();
playerTests.run();
//appTests.run();