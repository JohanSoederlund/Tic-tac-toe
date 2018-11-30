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
                var p1 = this.viewEngine.renderRequestNameInput();
                var p2 = this.viewEngine.renderRequestNameInput();
                playerAddedSuccessfully = this.addPlayers([p1, p2]);
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
            var playerMove = Number(this.viewEngine.renderRequestPlayerMove(player));
            var pm = [];
            switch (playerMove) {
                case 0:
                case 1:
                case 2:
                    pm = [0, playerMove - 3];
                    break;
                case 3:
                case 4:
                case 5:
                    pm = [1, playerMove - 3];
                    break;
                case 6:
                case 7:
                case 8:
                    pm = [2, playerMove - 6];
                    break;
                default:
                    break;
            }
            return pm;
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

        /**
         * Calls viewengine to render finished game.
         */

    }, {
        key: 'showFinishedGame',
        value: function showFinishedGame() {
            this.viewEngine.renderEndGame(this.gameEngine.endGame());
        }

        /**
         * Iterates until one player won by three in a row.
         */

    }, {
        key: 'roundLoop',
        value: function roundLoop() {
            var index = 0;
            while (!this.checkGameOver()) {
                try {
                    this.viewEngine.renderGameBoard(this.gameEngine._gameBoard);
                    var playerMove = this.requestPlayerMove(this.gameEngine.players[index]);
                    this.gameEngine.placeGamePiece(this.gameEngine.players[index], playerMove);
                    if (index === 0) {
                        index = 1;
                    } else {
                        index = 0;
                    }
                } catch (error) {
                    this.viewEngine.renderBadPlayerMove();
                }
            }
            this.showFinishedGame();
        }
    }]);

    return App;
}();

exports.default = App;