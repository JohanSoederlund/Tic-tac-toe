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
    var player1 = sinon.mock(_player2.default);
    var player2 = sinon.mock(_player2.default);
    player1._name = 'Michael';
    player2._name = 'Michelle';
    player1._gamePiece = 'X';
    player2._gamePiece = 'O';

    (0, _mocha.describe)('startGame', function () {

        (0, _mocha.describe)('called with correct playernames', function () {
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
        });

        (0, _mocha.describe)('called with incorrect playernames', function () {
            (0, _mocha.it)('should throw Error', function () {
                player1._name = "";
                player2._name = "ANameThatIsMuchToLongName";
                (0, _chai.expect)(function () {
                    return sut.startGame(player1, player2);
                }).to.throw(Error);
                player1._name = 'Michael';
                player2._name = 'Michelle';
            });
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
                sut.startGame(player1, player2);
                sut.placeGamePiece(player1, [0, 0]);
                var player3 = sinon.mock(_player2.default);
                player3._name = 'Michael';
                player3._gamePiece = 'Y';
                sut.placeGamePiece(player3, [0, 1]);
                done();
            });

            var expected = [["X", " ", " "], [" ", " ", " "], [" ", " ", " "]];

            (0, _mocha.it)('should return matching game object', function () {
                (0, _chai.expect)(JSON.stringify(sut.gameBoard)).to.equal(JSON.stringify(expected));
                sut = new _gameEngine2.default();
            });
        });
    });

    (0, _mocha.describe)('placeGamePiece', function () {

        (0, _mocha.describe)('place gamePiece at correct unoccupied gameSquare', function () {

            (0, _mocha.before)(function (done) {
                sut.startGame(player1, player2);
                sut.placeGamePiece(player2, [2, 2]);
                done();
            });

            (0, _mocha.it)('should update gameBoard with X on position [0][0]', function (done) {
                var expected = [[" ", " ", " "], [" ", " ", " "], [" ", " ", "O"]];
                (0, _chai.expect)(JSON.stringify(sut.gameBoard)).to.equal(JSON.stringify(expected));
                done();
            });
        });

        (0, _mocha.describe)('place gamePiece at incorrect gameSquare', function () {

            (0, _mocha.before)(function (done) {
                sut.placeGamePiece(player1, [2, 2]);
                done();
            });

            (0, _mocha.it)('should not update gameBoard', function (done) {
                var expected = [[" ", " ", " "], [" ", " ", " "], [" ", " ", "O"]];
                (0, _chai.expect)(JSON.stringify(sut.gameBoard)).to.equal(JSON.stringify(expected));
                done();
            });
            //sut = new GameEngine();
        });
        /*
                describe('place gamePiece at out of range gameSquare', () => {
                    
                    before((done) => {
                        sut.placeGamePiece(player1, [3, 0]);     
                        done();
                    });
                    
                    it('should not update gameBoard, but throw error', (done) => {
                        expect(() => sut.startGame(player1, player2)).to.throw(RangeError);
                        done();
                    });
                    sut = new GameEngine();
                });
                */
    });

    (0, _mocha.describe)('calculateThreeInARow', function () {

        (0, _mocha.describe)('calculates if three in a row is accomplished', function () {
            (0, _mocha.it)('should return false', function () {
                (0, _chai.expect)(sut.calculateThreeInARow(player1)).to.be.false;
            });
        });

        (0, _mocha.describe)('calculates if three in a row is accomplished', function () {

            (0, _mocha.before)(function (done) {
                sut = new _gameEngine2.default();
                sut.startGame(player1, player2);
                sut.placeGamePiece(player1, [0, 0]);
                sut.placeGamePiece(player1, [0, 1]);
                sut.placeGamePiece(player1, [0, 2]);
                done();
            });

            (0, _mocha.it)('should return true', function () {
                (0, _chai.expect)(sut.calculateThreeInARow(player1)).to.be.true;
            });
        });
    });

    (0, _mocha.describe)('endGame', function () {

        (0, _mocha.describe)('end game in progress', function () {
            var expected = {
                players: [player1, player2],
                roundNumber: 0,
                winner: player1._name
            };
            (0, _mocha.it)('should return current status for game then end it', function () {
                (0, _chai.expect)(JSON.stringify(sut.endGame())).to.equal(JSON.stringify(expected));
            });
        });

        (0, _mocha.describe)('end game in progress', function () {
            (0, _mocha.before)(function (done) {
                sut = new _gameEngine2.default();
                sut.startGame(player1, player2);
                done();
            });

            var expected = {
                players: [player1, player2],
                roundNumber: 0,
                winner: ''
            };
            (0, _mocha.it)('should return current status for game then end it', function () {
                (0, _chai.expect)(JSON.stringify(sut.endGame())).to.equal(JSON.stringify(expected));
            });
        });
    });
}