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

//var sinon = require('sinon');
//import sinon from './node_modules/sinon/pkg/sinon-esm.js';

var sut = new _gameEngine2.default(); /**
                                       * Test suite for the gameEngine class.
                                       */

// Requires

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

        (0, _mocha.describe)('called with correct playernames', function () {
            //const spy1 = sinon.spy(player, 'Johan');
            //const spy2 = sinon.spy(player, 'Lisa');
            //sut.startGame('Johan', 'lisa');
            //sut.startGame(spy1, spy2);

            var player1 = sinon.mock(_player2.default);
            var player2 = sinon.mock(_player2.default);
            sut.startGame(player1, player2);

            var actual = sut.getGame();
            var expected = {
                players: [player1, player2],
                roundNumber: 0,
                winner: ''
            };
            console.log(actual);
            console.log(expected);
            (0, _mocha.it)('should return matching game object', function () {
                //expect(spy.called).to.equal(true);
                (0, _chai.expect)(JSON.stringify(actual)).to.equal(JSON.stringify(expected));
            });
        });
    });
}