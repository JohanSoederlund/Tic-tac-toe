'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.run = run;

var _chai = require('chai');

var _mocha = require('mocha');

var _sinon = require('sinon');

var sinon = _interopRequireWildcard(_sinon);

var _gameEngine = require('./../app/gameEngine');

var _gameEngine2 = _interopRequireDefault(_gameEngine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Test suite for the gameEngine class.
 */

// Requires

var sut = new _gameEngine2.default();

function run() {
    (0, _mocha.describe)('start game', function () {

        /*
        before(() => {
        return new Promise((resolve) => {
        });
        });
         after(() => {
        return new Promise((resolve) => {
        });
        });
        */

        (0, _mocha.describe)('called with correct', function () {

            sut.startGame('Johan', 'lisa');
            var actual = sut.getGame();
            var expected = {
                players: ['Johan', 'lisa'],
                roundNumber: 0,
                winner: ''
            };
            (0, _mocha.it)('should emit game start', function () {
                (0, _chai.expect)(actual).to.equal(expected);
            });
        });
    });
}