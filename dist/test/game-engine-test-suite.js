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

var _player = require('../app/player.js');

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var sut = new _gameEngine2.default(); /**
                                       * Test suite for the gameEngine class.
                                       */

// Requires

function run() {
    (0, _mocha.describe)('startGame', function () {

        (0, _mocha.after)(function () {
            return new Promise(function (resolve) {
                sut = new _gameEngine2.default();
                resolve();
            });
        });

        (0, _mocha.describe)('called with correct playernames', function () {
            var player1 = sinon.mock(_player2.default);
            var player2 = sinon.mock(_player2.default);
            sut.startGame(player1, player2);

            var actual = sut.getGame();
            var expected = {
                players: [player1, player2],
                roundNumber: 0,
                winner: ''
            };
            (0, _mocha.it)('should return matching game object', function () {
                (0, _chai.expect)(JSON.stringify(actual)).to.equal(JSON.stringify(expected));
            });

            player1.restore();
            player2.restore();
            sut = new _gameEngine2.default();
        });

        (0, _mocha.describe)('called with incorrect playernames', function () {
            var player1 = sinon.mock(_player2.default);
            var player2 = sinon.mock(_player2.default);
            player1.name = "";
            player2.name = "ANameThatIsMuchToLongName";

            (0, _mocha.it)('should return matching game object', function () {
                (0, _chai.expect)(function () {
                    return sut.startGame(player1, player2);
                }).to.throw(RangeError);
            });

            player1.restore();
            player2.restore();
            sut = new _gameEngine2.default();
        });
    });

    (0, _mocha.describe)('get gameBoard', function () {

        (0, _mocha.describe)('get empty gameBoard', function () {
            var expected = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
            (0, _mocha.it)('should return matching game object', function () {
                (0, _chai.expect)(JSON.stringify(sut.gameBoard)).to.equal(JSON.stringify(expected));
            });
        });

        (0, _mocha.describe)('get gameBoard after one incorrect gamePiece', function () {
            (0, _mocha.before)(function (done) {
                var player1 = sinon.mock(_player2.default);
                player1._gamePiece = 'X';
                var placement = [0, 0];
                sut.placeGamePiece(player1, [0, 0]);
                player1._gamePiece = 'Y';
                sut.placeGamePiece(player1, [0, 1]);
                done();
            });

            var expected = [["X", " ", " "], [" ", " ", " "], [" ", " ", " "]];
            (0, _mocha.it)('should return matching game object', function () {
                (0, _chai.expect)(JSON.stringify(sut.gameBoard)).to.equal(JSON.stringify(expected));
            });

            sut = new _gameEngine2.default();
        });
    });

    (0, _mocha.describe)('placeGamePiece', function () {

        (0, _mocha.describe)('place gamePiece at correct unoccupied gameSquare', function () {

            (0, _mocha.before)(function (done) {
                var player1 = sinon.mock(_player2.default);
                player1._gamePiece = 'X';
                var placement = [0, 0];
                sut.placeGamePiece(player1, [0, 0]);
                done();
            });

            (0, _mocha.it)('should update gameBoard with X on position [0][0]', function (done) {
                var expected = [["X", " ", " "], [" ", " ", " "], [" ", " ", " "]];
                (0, _chai.expect)(JSON.stringify(sut.gameBoard)).to.equal(JSON.stringify(expected));
                done();
            });
            sut = new _gameEngine2.default();
        });

        (0, _mocha.describe)('place gamePiece at incorrect gameSquare', function () {

            (0, _mocha.before)(function (done) {
                var player1 = sinon.mock(_player2.default);
                player1._gamePiece = 'X';
                var placement = [0, 0];
                sut.placeGamePiece(player1, [0, 0]);
                done();
            });

            (0, _mocha.it)('should not update gameBoard, but throw error', function (done) {
                var expected = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
                (0, _chai.expect)(JSON.stringify(sut.gameBoard)).to.equal(JSON.stringify(expected));
                (0, _chai.expect)(function () {
                    return sut.startGame(player1, player2);
                }).to.throw(RangeError);
                done();
            });
            sut = new _gameEngine2.default();
        });
    });

    (0, _mocha.describe)('calculateThreeInARow', function () {

        (0, _mocha.describe)('calculates if three in a row is accomplished', function () {
            (0, _mocha.it)('should return false', function () {
                (0, _chai.expect)(sut.calculateThreeInARow()).to.be.false;
            });
        });

        (0, _mocha.describe)('calculates if three in a row is accomplished', function () {

            (0, _mocha.before)(function (done) {
                var player1 = sinon.mock(_player2.default);
                player1._gamePiece = 'X';
                sut.placeGamePiece(player1, [0, 0]);
                sut.placeGamePiece(player1, [0, 1]);
                sut.placeGamePiece(player1, [0, 2]);
                done();
            });

            (0, _mocha.it)('should return true', function () {
                (0, _chai.expect)(sut.calculateThreeInARow()).to.be.true;
            });
            sut = new _gameEngine2.default();
        });
    });

    (0, _mocha.describe)('endGame', function () {

        (0, _mocha.describe)('end game in progress', function () {
            var expected = {
                players: [],
                roundNumber: 0,
                winner: ''
            };
            (0, _mocha.it)('should return current status for game then end it', function () {
                (0, _chai.expect)(JSON.stringify(sut.endGame())).to.equal(JSON.stringify(expected));
            });
        });

        (0, _mocha.describe)('end game in progress', function () {
            var player1 = void 0;
            (0, _mocha.before)(function (done) {
                player1 = sinon.mock(_player2.default);
                player1._gamePiece = 'X';
                player1._name = 'Carl';
                sut.placeGamePiece(player1, [0, 0]);
                sut.placeGamePiece(player1, [0, 1]);
                sut.placeGamePiece(player1, [0, 2]);
                done();
            });

            var expected = {
                players: [player1],
                roundNumber: 0,
                winner: 'Carl'
            };
            (0, _mocha.it)('should return current status for game then end it', function () {
                (0, _chai.expect)(JSON.stringify(sut.endGame())).to.equal(JSON.stringify(expected));
            });
        });
    });
}