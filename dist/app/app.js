"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameEngine = require('./gameEngine');

var _gameEngine2 = _interopRequireDefault(_gameEngine);

var _viewEngine = require('./viewEngine');

var _viewEngine2 = _interopRequireDefault(_viewEngine);

var _player = require('./player');

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* 
 * App controller class.
 */
var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.gameEngine = new _gameEngine2.default();
        this.viewEngine = new _viewEngine2.default();
    }

    /**
     * Initiates new game with two players added to game engine.
     */


    _createClass(App, [{
        key: 'instanciateNewGame',
        value: function instanciateNewGame() {
            this.viewEngine.renderStartGame();
            var playerAddedSuccessfully = false;
            var index = 5;
            while (!playerAddedSuccessfully && index > 0) {
                playerAddedSuccessfully = this.addPlayers(this.viewEngine.renderRequestNameInput());
                index--;
            }
            return playerAddedSuccessfully;
        }

        /**
         * Add two players to game engine.
         */

    }, {
        key: 'addPlayers',
        value: function addPlayers(playerNames) {
            if (!Array.isArray(playerNames)) {
                return false;
            }
            try {
                this.gameEngine.startGame(new _player2.default(playerNames[0], 'X'), new _player2.default(playerNames[1], 'O'));
            } catch (error) {
                return false;
            }
            return true;
        }

        /**
         * Request a move from one Player.
         */

    }, {
        key: 'requestPlayerMove',
        value: function requestPlayerMove(player) {
            this.viewEngine.renderRequestPlayerMove(player);
        }

        /**
         * Check if the game is won by either one of the Players.
         */

    }, {
        key: 'checkGameOver',
        value: function checkGameOver() {
            for (var i = 0; i < 2; i++) {
                var player = this.gameEngine.players[i];
                if (this.gameEngine.calculateThreeInARow(player)) {
                    this.gameEngine.winner = player;
                    return true;
                }
            }
            return false;
        }
    }, {
        key: 'showFinishedGame',
        value: function showFinishedGame() {}
    }, {
        key: 'roundLoop',
        value: function roundLoop() {}
    }]);

    return App;
}();

exports.default = App;