"use strict";

/* 
 * Player class.
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
    function Player(name, gamePiece) {
        _classCallCheck(this, Player);

        this._name = name;
        this._gamePice = gamePiece;
        this._isWinner = false;
    }

    _createClass(Player, [{
        key: "name",
        get: function get() {
            return this._name;
        },


        /**
         * Player nickname
         * @param {String} name 
         */
        set: function set(name) {
            if (typeof name === "string" && 10 >= name.length && name.length >= 1) {
                this._name = name;
            } else {
                throw new TypeError("name must be between one and 10 characters long");
            }
        }

        /**
         * The players GamePiece represented as one char
         * @param {Character} gamePiece 
         */

    }, {
        key: "gamePiece",
        get: function get() {
            return this._gamePice;
        },
        set: function set(gamePiece) {

            if (typeof gamePiece === "string" && gamePiece.length === 1) {
                this._gamePice = gamePiece;
            } else {
                throw new TypeError("gamePiece must be one character long");
            }
        }

        /**
         * sets this player to winner if won the game
         * @param {boolean} winner true if this player won
         */

    }, {
        key: "isWinner",
        get: function get() {
            return this._isWinner;
        },
        set: function set(winner) {
            if (typeof winner === "boolean") {
                this._isWinner = winner;
            } else {
                throw new TypeError("winner must be of boolean type");
            }
        }
    }]);

    return Player;
}();

exports.default = Player;