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

    _createClass(App, [{
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
    }, {
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
    }, {
        key: 'addPlayers',
        value: function addPlayers(playerNames) {
            try {
                var player1 = new _player2.default(playerNames[0], 'X');
                var player2 = new _player2.default(playerNames[1], 'O');
                this.gameEngine.startGame(player1, player2);
            } catch (error) {
                return false;
            }
            return true;
        }
    }, {
        key: 'requestPlayerMove',
        value: function requestPlayerMove() {
            this.viewEngine.renderRequestPlayerMove();
        }
    }, {
        key: 'checkGameOver',
        value: function checkGameOver() {
            if (this.gameEngine.calculateThreeInARow(this.gameEngine.players[0])) {
                this.gameEngine.winner = this.gameEngine.players[0];
                return true;
            } else if (this.gameEngine.calculateThreeInARow(this.gameEngine.players[1])) {
                this.gameEngine.winner = this.gameEngine.players[1];
                return true;
            }
            return false;
        }
    }, {
        key: 'showFinishedGame',
        value: function showFinishedGame() {
            this.viewEngine.renderEndGame(this.gameEngine.endGame());
        }

        /*
        	constructor() {
                this.gameEngine = new GameEngine();
                this.viewEngine = new ViewEngine();
            }
            
            instanciateNewGame() {
        
            }
        
            addPlayers() {
        
            }
        
            requestPlayerMove() {
        
            }
        
            checkGameStatus() {
        
            }
        
            showFinishedGame() {
                
            }
            */

    }]);

    return App;
}();

exports.default = App;