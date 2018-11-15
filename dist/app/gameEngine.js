"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
            console.log("A" + this._gameBoard[placement[0]][placement[1]] + "A");
            console.log(player._gamePiece);
            if (this._gameBoard[placement[0]][placement[1]] === " ") {
                this._gameBoard[placement[0]][placement[1]] = player._gamePiece;
                if (player._gamePiece === "O") {
                    this.roundNumber++;
                }
            }
        }
    }, {
        key: "calculateThreeInARow",
        value: function calculateThreeInARow() {
            this._gameBoard.forEach(function (row) {
                if (row[0] !== " " && row[0] === row[1] === row[2]) {
                    return true;
                }
            });
            if (this._gameBoard[0][0] !== " ") {
                if (this._gameBoard[0][0] === this._gameBoard[1][0] === this._gameBoard[2][0]) return true;
                if (this._gameBoard[0][0] === this._gameBoard[1][1] === this._gameBoard[2][2]) return true;
            }
            if (this._gameBoard[0][1] !== " ") {
                if (this._gameBoard[0][1] === this._gameBoard[1][1] === this._gameBoard[2][1]) return true;
            }
            if (this._gameBoard[0][2] !== " ") {
                if (this._gameBoard[0][2] === this._gameBoard[1][2] === this._gameBoard[2][2]) return true;
                if (this._gameBoard[0][2] === this._gameBoard[1][1] === this._gameBoard[2][0]) return true;
            }
            return false;
        }
    }, {
        key: "startGame",
        value: function startGame(player1, player2) {
            //check player1 is of type Player
            this.players[0] = player1;
            this.players[1] = player2;
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
            this._gameBoard = gameBoard;
        },
        get: function get() {
            return this._gameBoard;
        }
    }]);

    return GameEngine;
}();

exports.default = GameEngine;