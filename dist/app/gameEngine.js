"use strict";

/* 
 * GameEngine class.
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameEngine = function () {
    function GameEngine() {
        _classCallCheck(this, GameEngine);

        this.roundNumber = 0;
        this.winner = "";
        this.players = [];
        this._gameBoard = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
    }

    _createClass(GameEngine, [{
        key: "placeGamePiece",
        value: function placeGamePiece(player, placement) {
            if ((typeof player === "undefined" ? "undefined" : _typeof(player)) !== "object" || placement.isArray === false) {
                throw new TypeError("player and placement must be of valid type");
            } else if (0 > placement[0] > 2 || 0 > placement[1] > 2) {
                throw new RangeError("Placement must be in range [0, 0] to [2, 2]");
            }

            if (JSON.stringify(this.players[0]) === JSON.stringify(player)) {
                if (this._gameBoard[placement[0]][placement[1]] === " ") {
                    this._gameBoard[placement[0]][placement[1]] = player._gamePiece;
                }
            } else if (JSON.stringify(this.players[1]) === JSON.stringify(player)) {
                if (this._gameBoard[placement[0]][placement[1]] === " ") {
                    this._gameBoard[placement[0]][placement[1]] = player._gamePiece;
                    this.roundNumber++;
                }
            }
        }
    }, {
        key: "calculateThreeInARow",
        value: function calculateThreeInARow(player) {
            if (this._gameBoard[0][0] === player._gamePiece) {
                if (this._gameBoard[0][0] === this._gameBoard[1][0] && this._gameBoard[1][0] === this._gameBoard[2][0]) return true;
                if (this._gameBoard[0][0] === this._gameBoard[1][1] && this._gameBoard[1][1] === this._gameBoard[2][2]) return true;
            }
            if (this._gameBoard[0][1] === player._gamePiece) {
                if (this._gameBoard[0][1] === this._gameBoard[1][1] && this._gameBoard[1][1] === this._gameBoard[2][1]) return true;
            }
            if (this._gameBoard[0][2] === player._gamePiece) {
                if (this._gameBoard[0][2] === this._gameBoard[1][2] && this._gameBoard[1][2] === this._gameBoard[2][2]) return true;
                if (this._gameBoard[0][2] === this._gameBoard[1][1] && this._gameBoard[1][1] === this._gameBoard[2][0]) return true;
            }
            var win = false;
            this._gameBoard.forEach(function (row) {
                if (row[0] === player._gamePiece && row[0] === row[1] && row[1] === row[2]) win = true;
            });
            return win;
        }
    }, {
        key: "startGame",
        value: function startGame(player1, player2) {
            if ((typeof player1 === "undefined" ? "undefined" : _typeof(player1)) !== "object" || (typeof player2 === "undefined" ? "undefined" : _typeof(player2)) !== "object") {
                throw new TypeError("players must be of valid type");
            }
            if (typeof player1._name !== "string" || 10 < player1._name.length || player1._name.length < 1 || typeof player2._name !== "string" || 10 < player2._name.length || player2._name.length < 1) {
                throw new Error("name must be between one and 10 characters long");
            } else {
                this.players[0] = player1;
                this.players[1] = player2;
            }
        }
    }, {
        key: "getGame",
        value: function getGame() {
            return {
                players: this.players,
                roundNumber: this.roundNumber,
                winner: this.winner
            };
        }
    }, {
        key: "endGame",
        value: function endGame() {
            if (this.calculateThreeInARow(this.players[0])) this.winner = this.players[0]._name;
            if (this.calculateThreeInARow(this.players[1])) this.winner = this.players[1]._name;
            var game = {
                players: this.players,
                roundNumber: this.roundNumber,
                winner: this.winner
            };
            this.players = [];
            this.roundNumber = 0;
            this.winner = "";
            return game;
        }
    }, {
        key: "gameBoard",
        set: function set(gameBoard) {
            if (gameBoard.isArray && gameBoard[0].isArray) {
                this._gameBoard = gameBoard;
            } else {
                throw new TypeError("gameBoard must be of valid type");
            }
        },
        get: function get() {
            return this._gameBoard;
        }
    }]);

    return GameEngine;
}();

exports.default = GameEngine;