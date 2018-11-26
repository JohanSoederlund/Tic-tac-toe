'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.run = run;

var _chai = require('chai');

var _mocha = require('mocha');

var _player = require('../app/player.js');

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sut = new _player2.default('Liz', 'Q');

/**
 * Test-suite for Player. 
 */
/**
 * Test suite for the gameEngine class.
 */

// Requires

function run() {

    (0, _mocha.describe)('isWinner', function () {

        (0, _mocha.describe)('called before set', function () {
            (0, _mocha.it)('should return false', function () {
                (0, _chai.expect)(sut.isWinner).to.be.false;
            });
        });

        (0, _mocha.describe)('called after set to true', function () {
            (0, _mocha.before)(function (done) {
                sut.isWinner = true;
                done();
            });

            (0, _mocha.after)(function (done) {
                sut.isWinner = false;
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
                (0, _chai.expect)(function () {
                    sut.isWinner = null;
                }).to.throw(Error);
                (0, _chai.expect)(sut.isWinner).to.be.false;
            });
        });
    });

    (0, _mocha.describe)('name', function () {

        (0, _mocha.describe)('called with falsy player', function () {

            (0, _mocha.it)('should throw error', function () {
                (0, _chai.expect)(function () {
                    sut.name = "WayToLongNameKalle";
                }).to.throw(Error);
                (0, _chai.expect)(sut.name).to.equal('Liz');
            });
        });

        (0, _mocha.describe)('called after set to null', function () {
            (0, _mocha.it)('should throw TypeError name must be max 10 characters long', function () {
                (0, _chai.expect)(function () {
                    sut.name = null;
                }).to.throw(Error);
                (0, _chai.expect)(sut.name).to.equal('Liz');
            });
        });

        (0, _mocha.describe)('called after set to Lizz', function () {
            (0, _mocha.it)('should not throw TypeError name must be max 10 characters long', function () {
                (0, _chai.expect)(function () {
                    sut.name = "Lizz";
                }).to.not.throw(Error);
                (0, _chai.expect)(sut.name).to.equal('Lizz');
            });
        });
    });

    (0, _mocha.describe)('gamePiece', function () {

        (0, _mocha.describe)('called with falsy player', function () {

            (0, _mocha.it)('should throw error', function () {
                (0, _chai.expect)(function () {
                    sut.gamePiece = "XO";
                }).to.throw(Error);
                (0, _chai.expect)(sut.gamePiece).to.equal('Q');
            });
        });

        (0, _mocha.describe)('called after set to null', function () {
            (0, _mocha.it)('should throw Error', function () {
                (0, _chai.expect)(function () {
                    sut.gamePiece = null;
                }).to.throw(Error);
                (0, _chai.expect)(sut.gamePiece).to.equal('Q');
            });
        });

        (0, _mocha.describe)('called after set to X', function () {
            (0, _mocha.it)('Should not throw TypeError gamePiece must be one character long', function () {
                (0, _chai.expect)(function () {
                    sut.gamePiece = "X";
                }).to.not.throw(Error);
                (0, _chai.expect)(sut.gamePiece).to.equal('X');
            });
        });
    });
}