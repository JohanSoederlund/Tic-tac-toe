'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.run = run;

var _chai = require('chai');

var _mocha = require('mocha');

var _sinon = require('sinon');

var sinon = _interopRequireWildcard(_sinon);

var _player = require('../app/player.js');

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Test suite for the gameEngine class.
 */

// Requires

var sut = new _player2.default('Liz', 'Q');

function run() {
    (0, _mocha.describe)('isWinner', function () {

        (0, _mocha.describe)('called before set', function () {
            (0, _mocha.it)('should return false', function () {
                (0, _chai.expect)(sut.isWinner).to.be.false;
            });
        });

        (0, _mocha.describe)('called after set to true', function () {
            (0, _mocha.before)(function (done) {
                sut.setIsWinner(true);
                done();
            });

            (0, _mocha.after)(function (done) {
                sut.setIsWinner(false);
                done();
            });

            (0, _mocha.it)('should return true', function () {
                (0, _chai.expect)(sut.isWinner).to.be.true;
            });
        });

        (0, _mocha.describe)('called after set to null', function () {
            (0, _mocha.it)('should throw TypeError winner must be of boolean type', function () {
                (0, _chai.expect)(function () {
                    return sut.setIsWinner(null);
                }).to.throw(TypeError);
                (0, _chai.expect)(sut.isWinner).to.be.false;
            });
        });
    });
}