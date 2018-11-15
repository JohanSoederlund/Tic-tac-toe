'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.run = run;

var _chai = require('chai');

var _mocha = require('mocha');

var _sinon = require('sinon');

var sinon = _interopRequireWildcard(_sinon);

var _gamePiece = require('./../app/gamePiece');

var _gamePiece2 = _interopRequireDefault(_gamePiece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Test suite for the gamePiece class.
 */

// Requires

var sut = new _gamePiece2.default();

function run() {
    (0, _mocha.describe)('method', function () {

        (0, _mocha.before)(function () {
            return new Promise(function (resolve) {});
        });

        (0, _mocha.after)(function () {
            return new Promise(function (resolve) {});
        });

        (0, _mocha.describe)('input', function () {
            var spy = sinon.spy();

            (0, _mocha.before)(function () {
                return new Promise(function (resolve) {});
            });

            (0, _mocha.after)(function () {
                return new Promise(function (resolve) {});
            });

            (0, _mocha.it)('should', function () {
                (0, _chai.expect)(spy.called).to.equal(true);
            });
        });
    });
}

// Helpers
function testDisconnect() {
    //return sut.disconnect();
}