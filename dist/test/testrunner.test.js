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

// Runs
//gameEngineTests.run();
playerTests.run();